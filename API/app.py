from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import devices

app = FastAPI(
    title="API para el Reto de TC1004",
    description="Desarrollado en FastAPI para mandar y recibir datos de los sensores",
    version="0.0.1",
)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(devices)

@app.get("/")
def helloWorld():
    return "Bienvenidos al API del equipo 7, para el reto de TC1004"

