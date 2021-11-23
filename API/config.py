from sqlalchemy import create_engine, MetaData

engine = create_engine("mysql+pymysql://root:retoiotpwdD@localhost:3306/retoiot")

meta = MetaData() # enlazar desc y caracteristicas de la base de datos
conn = engine.connect() # conectar con la base de datos
