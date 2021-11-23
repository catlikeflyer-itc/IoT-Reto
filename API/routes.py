from fastapi import APIRouter
from config import conn
from models import *
from schema import Registro

devices = APIRouter() # crear router de usuarios, sirve para conectar con el app principal

@devices.get("/registros")
def get_all_devices():
    return conn.execute("SELECT * FROM dispositivos").fetchall() # == SELECT * FROM users

@devices.post("/registros")
def post_data_to_server(dis: Registro):
    new_dis = {"tiempo": dis.tiempo, "CO": dis.CO, "CO2": dis.CO2, "humedad": dis.humedad, "idSalon": dis.idSalon, "matricula": dis.matricula}
    result = conn.execute(registros.insert().values(new_dis)) # == INSERT INTO users VALUES(...)

    return conn.execute(registros.select().where(registros.c.id == result.lastrowid)).first() # == SELECT * FROM users WHERE id = result.lastrowid

