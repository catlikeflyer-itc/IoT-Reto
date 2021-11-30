from datetime import datetime
from pydantic import BaseModel
from typing import Optional

class Registro(BaseModel):
    id: Optional[int]
    tiempo: str # Change to datetime
    CO: float
    CO2: float
    alcohol: float
    idSalon: Optional[int]
    matricula: Optional[str]

    class Config:
        orm_mode = True

"""
JSON Schema
{
    "id": int,
    "tiempo": str,
    "CO": float,
    "CO2": float,
    "humedad": float,
    "idSalon": int,
    "matricula": str
}
"""

class Admin(BaseModel):
    matricula: str
    isStudent: bool
    
    class Config:
        orm_mode = True

class Salon(BaseModel):
    idSalon: int
    aula: int
    volumen: float
    ventanas: int

    class Config:
        orm_mode = True

class RegistroUpdate(BaseModel):
    idSalon: int
    matricula: str

    class Config:
        orm_mode = True

class Dispositivo(BaseModel):
    idDevice: Optional[int]
    MAC: str
    sensorCO: bool
    sensorCO2: bool
    sensorAlcohol: bool

    class Config:
        orm_mode = True
