from sqlalchemy.orm import Session
import models, schemas

def get_registros(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Registro).offset(skip).limit(limit).all()

def get_registro(db: Session, id: int):
    return db.query(models.Registro).filter(models.Registro.id == id).first()

def add_registro(db: Session, registro: schemas.Registro):
    db_registro = models.Registro(
        tiempo=registro.tiempo,
        CO=registro.CO,
        CO2=registro.CO2,
        humedad=registro.humedad,
        idSalon=registro.idSalon,
        matricula=registro.matricula,
    )
    db.add(db_registro)
    db.commit()
    db.refresh(db_registro)

    return db_registro

def get_admins(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Admin).offset(skip).limit(limit).all()

def add_admin(db: Session, admin: schemas.Admin):
    db_admin = models.Admin(
        matricula=admin.matricula,
        isStudent=admin.isStudent,
    )
    db.add(db_admin)
    db.commit()
    db.refresh(db_admin)

    return db_admin

def get_salones(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Salon).offset(skip).limit(limit).all()

def add_salon(db: Session, salon: schemas.Salon):
    db_salon = models.Salon(
        idSalon=salon.idSalon,
        aula=salon.aula,
        volumen=salon.volumen,
        ventanas=salon.ventanas,
    )
    db.add(db_salon)
    db.commit()
    db.refresh(db_salon)

    return db_salon