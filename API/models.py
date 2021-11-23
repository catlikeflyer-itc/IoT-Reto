from sqlalchemy import Table, Column, ForeignKey
from sqlalchemy.sql.sqltypes import Integer, String, DateTime, Float, Boolean
from config import meta, engine

# Definir esquema de tabla de dispositivo
registros = Table("registros", meta, 
    Column("id", Integer, primary_key=True),
    Column("tiempo", DateTime(timezone=True)),
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