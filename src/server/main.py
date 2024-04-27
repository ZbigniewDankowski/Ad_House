from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime, timedelta
from bson import ObjectId
from pymongo import MongoClient
from models import *
from dotenv import load_dotenv
import os
import logging



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Dodaj adres swojej aplikacji frontendowej
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

# Konfiguracja JWT
SECRET_KEY = os.getenv("ad_house_secret_key_engineering")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Konfiguracja bazy danych MongoDB
DATABASE_URL = os.getenv("DATABASE_URL")
COLLECTION_NAME = os.getenv("COLLECTION_NAME")

# Konfiguracja hashowania hasła
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Inicjalizacja połączenia z bazą danych MongoDB
client = MongoClient("mongodb://localhost:27017/AdHouse")
collection = client["Users"]






# Funkcje pomocnicze
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_user(email: str):
   user = collection.find_one({"email": email})
   return user

    

def authenticate_user(email: str, password: str):
    user = get_user(email)
    if not user:
        return False
    if not verify_password(password, user.password_hash):
        return False
    return user

def create_access_token(data: dict, expires_delta: timedelta):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    logging.info("Token JWT został wygenerowany")
    return encoded_jwt

# Endpointy
@app.post("/token", response_model=Token)

async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        logging.warning("Nieudane logowanie - nieprawidłowy email lub hasło")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Nieprawidłowy email lub hasło",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.user_id}, expires_delta=access_token_expires
    )
    logging.info("Użytkownik pomyślnie uwierzytelniony, token JWT został zwrócony")
    return {"access_token": access_token, "token_type": "bearer"}

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)  # Ustawienie poziomu logowania na INFO
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)