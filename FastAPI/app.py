from typing import List
from fastapi import FastAPI, Depends, Request
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from sqlalchemy.orm import Session
import crud, models, schemas
from config import SessionLocal, engine

# Bind with database engine
models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Reto IoT TC1004",
    description="API para el reto IoT TC1004",
    version="0.1.0",
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def main(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/registros", response_model=List[schemas.RegistroGet])
def get_all_registros(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_registros(db, skip=skip, limit=limit)

@app.get("/admins", response_model=List[schemas.Admin])
def get_all_admins(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_admins(db, skip=skip, limit=limit)

@app.get("/salones", response_model=List[schemas.Salon])
def get_all_salones(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_salones(db, skip=skip, limit=limit)

@app.post("/registros", response_model=schemas.RegistroPost)
def create_registro(registro: schemas.RegistroPost, db: Session = Depends(get_db)):
    return crud.add_registro(db, registro)

@app.post("/admin", response_model=schemas.Admin)
def create_admin(admin: schemas.Admin, db: Session = Depends(get_db)):
    return crud.add_admin(db, admin=admin)

@app.post("/salon", response_model=schemas.Salon)
def create_salon(salon: schemas.Salon, db: Session = Depends(get_db)):
    return crud.add_salon(db, salon=salon)

@app.put("/registros/{registro_id}", response_model=schemas.RegistroUpdate)
def update_registro(registro_id: int, registro: schemas.RegistroUpdate, db: Session = Depends(get_db)):
    return crud.update_registro(db=db, id=registro_id, registro=registro)

@app.get("/dispositivos", response_model=List[schemas.Dispositivo])
def get_all_dispositivos(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_dispositivos(db, skip=skip, limit=limit)

@app.post("/dispositivo", response_model=schemas.Dispositivo)
def add_dispositivo(dispositivo: schemas.Dispositivo, db: Session = Depends(get_db)):
    return crud.add_dispositivo(db, dispositivo=dispositivo)

