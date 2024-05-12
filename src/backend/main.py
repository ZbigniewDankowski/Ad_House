from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from pymongo import MongoClient
from bson import ObjectId
import hashlib
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Umożliwia żądania CORS dla wszystkich domen, dla bezpieczeństwa określ konkretne domeny
    allow_credentials=True,
    allow_methods=["*"],  # Możesz także określić konkretne metody, np. ["GET", "POST"]
    allow_headers=["*"],
)

# Konfiguracja klienta MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["AdHouse"]  # Nazwa bazy danych
users = db["Users"]  # Kolekcja

# Model danych dla użytkownika
class UserLogin(BaseModel):
    email: str
    password: str

# Hashowanie hasła
def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode()).hexdigest()

# Endpoint logowania
@app.post("/login/")
async def login(user: UserLogin):
    user_in_db = users.find_one({"email": user.email})
    if user_in_db and user_in_db["password"] == user.password:
        return {"message": "Login successful"}
    raise HTTPException(status_code=400, detail="Invalid email or password")