from datetime import datetime
from pydantic import BaseModel
from typing import Optional

class Registro(BaseModel):
    id: Optional[int]
    tiempo: str # Change to datetime
    CO: float
    CO2: float
    humedad: float
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