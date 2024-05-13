from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel
from pymongo import MongoClient
from bson import ObjectId
import hashlib
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

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
admin = db["Admin"]

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
        # Nie zwracaj hasła ani innych wrażliwych danych
        user_data = {
            "user_id": str(user_in_db["_id"]),  # Przekształć ObjectId na string
            "name": user_in_db.get("name"),
            "surname": user_in_db.get("surname"),
            "email": user_in_db.get("email")
        }
        return JSONResponse(status_code=status.HTTP_200_OK, content={"message": "Login successful", "user": user_data})
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid email or password")

@app.post("/admin_login/")
async def login(user: UserLogin):
    user_in_db = admin.find_one({"email": user.email})
    if user_in_db and user_in_db["password"] == user.password:
        # Nie zwracaj hasła ani innych wrażliwych danych
        user_data = {
            "user_id": str(user_in_db["_id"]),  # Przekształć ObjectId na string
            "name": user_in_db.get("name"),
            "surname": user_in_db.get("surname"),
            "email": user_in_db.get("email")
        }
        return JSONResponse(status_code=status.HTTP_200_OK, content={"message": "Login successful", "user": user_data})
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid email or password")


