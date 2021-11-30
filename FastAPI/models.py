from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Float
from sqlalchemy.orm import relationship
from config import Base

class Registro(Base):
    __tablename__ = 'registro'

    id = Column(Integer, primary_key=True, index=True)
    tiempo = Column(String(50), nullable=True)
    CO = Column(Float, nullable=False)
    CO2 = Column(Float, nullable=False)
    alcohol = Column(Float, nullable=False)
    idDevice = Column(Integer, ForeignKey('dispositivo.idDevice'), nullable=False) # FK
    idSalon = Column(Integer, ForeignKey('salon.idSalon'), nullable=True) # FK
    matricula = Column(String(50), ForeignKey('admin.matricula'), nullable=True) # FK

    salon = relationship("Salon", back_populates="registros")
    admin = relationship("Admin", back_populates="registros")
    dispositivo = relationship("Dispositivo", back_populates="registros")

class Salon(Base):
    __tablename__ = 'salon'

    idSalon = Column(Integer, primary_key=True, index=True)
    aula = Column(Integer, nullable=False)
    volumen = Column(Float, nullable=False)
    ventanas = Column(Integer, nullable=False)

    registros = relationship("Registro", back_populates="salon")

class Admin(Base):
    __tablename__ = 'admin'

    matricula = Column(String(50), primary_key=True, index=True)
    isStudent = Column(Boolean, nullable=False)

    registros = relationship("Registro", back_populates="admin")

class Dispositivo(Base):
    __tablename__ = 'dispositivo'

    idDevice = Column(Integer, primary_key=True, index=True)
    MAC = Column(String(50), nullable=False)
    sensorCO = Column(Float, nullable=False)
    sensorCO2 = Column(Float, nullable=False)
    sensorAlcohol = Column(Float, nullable=False)

    registros = relationship("Registro", back_populates="dispositivo")
