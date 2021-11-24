from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# URL to connect to the database
SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:retoiotpwdD@localhost:3306/retoiot"

# Create the engine
engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)

# Create instance of the database using a session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Inheritable base class for all models
Base = declarative_base()