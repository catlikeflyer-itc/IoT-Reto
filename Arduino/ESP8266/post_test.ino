/*
 WiFiEsp example: WebClient
 This sketch connects to google website using an ESP8266 module to
 perform a simple web search.
 For more details see: http://yaab-arduino.blogspot.com/p/wifiesp-example-client.html
*/

#include "WiFiEsp.h"
#include <ArduinoJson.h>

// Emulate Serial1 on pins 6/7 if not present
#ifndef HAVE_HWSERIAL1
#include "SoftwareSerial.h"
SoftwareSerial Serial1(6, 7); 
#endif

char ssid[] = "Vum";            // your network SSID (name)
char pass[] = "12345678";        // your network password
int status = WL_IDLE_STATUS;     // the Wifi radio's status

char server[] = "http://api-reto-iot.herokuapp.com";
char server1[] = "https://622c-148-241-109-145.ngrok.io";

// Initialize the Ethernet client object
WiFiEspClient client;

void setup()
{
  // initialize serial for debugging
  Serial.begin(115200);
  // initialize serial for ESP module
  Serial1.begin(9600);
  // initialize ESP module
  WiFi.init(&Serial1);

  // check for the presence of the shield
  if (WiFi.status() == WL_NO_SHIELD) {
    Serial.println("WiFi shield not present");
    // don't continue
    while (true);
  }

  // attempt to connect to WiFi network
  while ( status != WL_CONNECTED) {
    Serial.print("Attempting to connect to WPA SSID: ");
    Serial.println(ssid);
    // Connect to WPA/WPA2 network
    status = WiFi.begin(ssid, pass);
  }

  // you're connected now, so print out the data
  Serial.println("You're connected to the network");

  printWifiStatus();

  //Serialize Json Doc
  DynamicJsonDocument doc1(1024);
 
  String matricula = "A01027746";
  bool isStudent = true;

  doc1["matricula"] = matricula;
  doc1["isStudent"] = isStudent;

  String postData1;
  
  
  serializeJson(doc1, postData1);

  Serial.println(postData1);
  delay(5000);
  
  // if you get a connection, report back via serial
  if (client.connect(server, 80)) { // Si so jala en el 80 ponle 5000
    Serial.println("Connecting...");
    //delay(5000);
    // Make a HTTP request
    //int value = 123456789;

    client.println("POST /admin HTTP/1.1");
    client.println("Host: api-reto-iot.herokuapp.com");
    String content = "matricula=A01025076&isStudent=True";
    //client.println("POST /admin HTTP/1.1");
    //client.println("Host: api-reto-iot.herokuapp.com");
    client.println("Content-Type: application/x-www-form-urlencoded");
    client.println("Authorization: Bearer {token}");
    //client.println("Connection: keep-alive");
    client.print("Content-Length: "); 
    client.println(String(postData1.length()));
    client.println();
    //client.print(postData1);
    client.println(content);

    if(client.connected()){
      client.stop();
     }

  }

   else{
    Serial.println("Conection failed");
    }
}

void loop()
{
  // if there are incoming bytes available
  // from the server, read them and print them
  
  /*
  while (client.available()) {
    char c = client.read();
    Serial.write(c);
  }
  */ 
  
  // if the server's disconnected, stop the client
  if (!client.connected()) {
    Serial.println();
    Serial.println("Disconnecting from server...");
    client.stop();

    // do nothing forevermore
    while (true);
  }
}


void printWifiStatus()
{
  // print the SSID of the network you're attached to
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  // print your WiFi shield's IP address
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  // print the received signal strength
  long rssi = WiFi.RSSI();
  Serial.print("Signal strength (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");
  
  }
