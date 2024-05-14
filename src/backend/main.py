from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, Field , field_validator
from pydantic.fields import Field
from pymongo import MongoClient
from bson import ObjectId
import hashlib
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from passlib.context import CryptContext
from typing import Optional

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

class UserCreate(BaseModel):
    imie: str
    nazwisko: str
    email: str
    haslo: str  
    numer_bloku: str
    numer_klatki: str
    numer_mieszkania: str
    telefon: Optional[str] = None  

class UpdateUserModel(BaseModel):
    imie: str
    nazwisko: str
    email: str
    numer_bloku: str
    numer_klatki: str
    numer_mieszkania: str
    telefon: str = Field(default=None)  # Telefon jest opcjonalny    



# Hasłowanie haseł
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Endpoint logowania
@app.post("/login/")
async def login(user: UserLogin):
    user_in_db = users.find_one({"email": user.email})
    if user_in_db and pwd_context.verify(user.password, user_in_db.get("haslo", "")):
        # Nie zwracaj hasła ani innych wrażliwych danych
        user_data = {
            "user_id": str(user_in_db["_id"]),  # Przekształć ObjectId na string
            "imie": user_in_db.get("imie"),
            "nazwisko": user_in_db.get("nazwisko"),
            "email": user_in_db.get("email"),
            "numer_bloku": user_in_db.get("numer_bloku"),
            "numer_klatki": user_in_db.get("numer_klatki"),
            "numer_mieszkania": user_in_db.get("numer_mieszkania"),
            "telefon": user_in_db.get("telefon"),
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
            "imie": user_in_db.get("imie"),
            "nazwisko": user_in_db.get("nazwisko"),
            "email": user_in_db.get("email")
        }
        return JSONResponse(status_code=status.HTTP_200_OK, content={"message": "Login successful", "user": user_data})
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid email or password")

@app.post("/register_new_user/", response_model=UserCreate)
async def register_new_user(user: UserCreate):
    # Sprawdzenie, czy użytkownik już istnieje
    if users.find_one({"email": user.email}):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")

    # Hashowanie hasła przed zapisem
    hashed_password = pwd_context.hash(user.haslo)
    user_dict = user.dict()
    user_dict["haslo"] = hashed_password  # Zastąp oryginalne hasło zahashowanym

    # Zapis do bazy danych
    result = users.insert_one(user_dict)
    if result.inserted_id:
        return user_dict
    raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Registration failed")

@app.post("/update_user/")
async def update_user(user_data: UpdateUserModel):
    # Wyszukanie użytkownika i aktualizacja danych
    update_result = users.update_one(
        {"email": user_data.email},
        {"$set": user_data.model_dump()}
    )
    if update_result.modified_count == 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    return {"message": "User updated successfully", "updated_count": update_result.modified_count}



