from datetime import datetime
from pydantic import BaseModel
from typing import Optional

class Registro(BaseModel):
    id: Optional[int]
    tiempo: datetime
    CO: float
    CO2: float
    humedad: float
    idSalon: Optional[int]
    matricula: Optional[str]

class Admin(BaseModel):
    matricula: str
    isStudent: bool

class Salon(BaseModel):
    idSalon: int
    aula: int
    volumen: float
    ventanas: int