#include <ArduinoJson.h>
#include <WiFiNINA.h>
#include <Servo.h>

char ssid[] = "Vum"; //SSID de la red
char password[] = "12345678"; //Contraseña de la red

int status = WL_IDLE_STATUS;

char server[] = "api-reto-iot.herokuapp.com";    //Always modify when re-run ngrok
//char server[] = "api-reto-iot.herokuapp.com";    //Always modify when re-run ngrok


WiFiClient client;

//Sensores de Gas
//Variables MQ7
int adc_MQ7; 
float voltajeMQ7; 
float RS7;
float RO7 = 17000;
float CO;

//Variables MQ135
int adc_MQ135; 
float voltajeMQ135; 
float RS135;
float RO135 = 1598.98; 
float CO2;
float alcohol;

//Actuador (servo)
int servoPin = 3;

Servo Servo1;

void setup(){
  
  Serial.begin(9600);

  while (status != WL_CONNECTED) {
    Serial.println("Attempting to connect to Network: ");
    Serial.println(ssid);
    status = WiFi.begin(ssid,password);
    delay (1000);
  }

  Serial.print("Connected to SSID: ");
  Serial.println(WiFi.SSID());
  IPAddress ip = WiFi.localIP();
  IPAddress gateway = WiFi.gatewayIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

}

void loop(){

  // Obtención de mediciones MQ7
  adc_MQ7 = analogRead(A0); //Lemos la salida analógica  del MQ7
  voltajeMQ7 = adc_MQ7 * (5.0 / 1024.0); //Convertimos la lectura en un valor de voltaje
  RS7 = (5.0-voltajeMQ7)/voltajeMQ7;;  //Calculamos Rs con un RL de 1k
  ratio = RS7/RO7
  float x = 1538.46 * ratio;
  float CO = pow(x, -1.709);
  //CO = 108.46*pow(RS7/RO7, -1.4777); // calculamos la concentración  de CO en ppm

  // Obtención de mediciones MQ135
  adc_MQ135 = analogRead(A1); //Lemos la salida analógica  del MQ135
  voltajeMQ135 = adc_MQ135 * (5.0 / 1024.0); //Convertimos la lectura en un valor de voltaje
  RS135 = 1000*((5-voltajeMQ135)/voltajeMQ135);  //Calculamos Rs con un RL de 1k
  CO2 = .4091*pow(RS135/RO135, -1.497); // calculamos la concentración  de CO2 en ppm
  alcohol = analogRead(A1);
  

  DynamicJsonDocument doc1(1024);
  
  String tiempo = "01-01-01";
  String matricula = "AA11";
  float co = 0.0;
  float co2 = 0.0;
  float alc = 0.0;
  int idSalon = 9999;
  //int idDevice = 6;
  
  //doc1["tiempo"] = tiempo;
  doc1["CO"] = CO;
  doc1["CO2"] = CO2;
  doc1["alcohol"] = alcohol;
  //doc1["idDevice"] = 2;
  doc1["idSalon"] = idSalon;
  doc1["matricula"] = matricula;

  String postData1;

  serializeJson(doc1, postData1);

  //Conexion a servidor y POST request
   if (client.connect(server, 80)) {
    client.println("POST /registros HTTP/1.1");
    client.println("Host: api-reto-iot.herokuapp.com");
    //client.println("Host: api-reto-iot.herokuapp.com");
    client.println("Content-Type: application/json");
    client.print("Content-Length: ");
    client.println(postData1.length());
    client.println();
    client.print(postData1);
   }

  if (client.connected()) {
    client.stop();
  }
  
  Serial.println(postData1);
  delay(500);
  //-------Enviamos los valores por el puerto serial------------
  Serial.print("CO:");
  Serial.print(CO);
  Serial.print(" ppm");
  Serial.print("   |   CO2:");
  Serial.print(CO2);
  Serial.print(" ppm");
  Serial.print("   |   alcohol:");
  Serial.print(alcohol);

  //Activamos el Servo si el nivel de gases es peligroso
  if(CO > 35){
    Servo1.write(0);
    delay(10000);
    Servo1.write(90);
   }
    
  delay(10000);
  
}
