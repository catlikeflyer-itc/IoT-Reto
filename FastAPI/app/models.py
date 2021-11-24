from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Float
from sqlalchemy.orm import relationship
from config import Base

class Registro(Base):
    __tablename__ = 'registro'

    id = Column(Integer, primary_key=True, index=True)
    tiempo = Column(String(50), nullable=True)
    CO = Column(Float, nullable=False)
    CO2 = Column(Float, nullable=False)
    humedad = Column(Float, nullable=False)
    idSalon = Column(Integer, ForeignKey('salon.idSalon'), nullable=False)
    matricula = Column(String(50), ForeignKey('admin.matricula'), nullable=False)

    salon = relationship("Salon", back_populates="registros")
    admin = relationship("Admin", back_populates="registros")

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

"""
# Definir esquema de tabla de dispositivo
registros = Table("registros", meta, 
    Column("id", Integer, primary_key=True),
    # Column("tiempo", String(50)),
    Column("CO", Float),
    Column("CO2", Float),
    Column("humedad", Float),
    Column("idSalon", ForeignKey("salon.idSalon")),
    Column("matricula", ForeignKey("admin.matricula")),
) 

admin = Table("admin", meta,
    Column("matricula", String(10), primary_key=True),
    Column("isStudent", Boolean),
)

salon = Table("salon", meta,
    Column("idSalon", Integer, primary_key=True),
    Column("aula", Integer),
    Column("volumen", Float),
    Column("ventanas", Integer),
)

meta.create_all(engine) # crear tablas en la base de datos
"""
