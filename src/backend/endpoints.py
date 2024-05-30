from fastapi import  APIRouter, HTTPException, status
from pymongo import MongoClient
from fastapi.responses import JSONResponse
from passlib.context import CryptContext
from models import *

router = APIRouter()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Konfiguracja klienta MongoDB
# client = MongoClient("mongodb://localhost:27017/")
# db = client["AdHouse"]  # Nazwa bazy danych
# users = db["Users"]  # Kolekcja
# admin = db["Admin"]

client = MongoClient("mongodb+srv://Admin:admin@mongodb.mockvji.mongodb.net/?retryWrites=true&w=majority&appName=MongoDB")
db = client["AdHouse"]  # Nazwa bazy danych
users = db["Users"]  # Kolekcja
admin = db["Admin"]
nieruchomosci = db["Nieruchomosci"]
lokale = db["Lokale"]
board = db["Zarzad_Wspolnoty"]

@router.post("/login/")
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

@router.post("/admin_login/")
async def loginAdmin(user: UserLogin):
    user_in_db = admin.find_one({"email": user.email})
    if user_in_db and pwd_context.verify(user.password, user_in_db.get("password", "")):
        # Nie zwracaj hasła ani innych wrażliwych danych
        user_data = {
            "user_id": str(user_in_db["_id"]),  # Przekształć ObjectId na string
            "imie": user_in_db.get("imie"),
            "nazwisko": user_in_db.get("nazwisko"),
            "email": user_in_db.get("email")
        }
        return JSONResponse(status_code=status.HTTP_200_OK, content={"message": "Login successful", "user": user_data})
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid email or password")

@router.post("/register_new_user/", response_model=UserCreate)
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

@router.post("/update_user/")
async def update_user(user_data: UpdateUserModel):
    # Wyszukanie użytkownika i aktualizacja danych
    update_result = users.update_one(
        {"email": user_data.email},
        {"$set": user_data.model_dump()}
    )
    if update_result.modified_count == 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    return {"message": "User updated successfully", "updated_count": update_result.modified_count}

@router.get("/nieruchomosci/")
async def get_nieruchomosci():
    try:
        nieruchomosci_list = list(nieruchomosci.find())
        for nieruchomosc in nieruchomosci_list:
            nieruchomosc["_id"] = str(nieruchomosc["_id"])  # Konwersja ObjectId na string
        return JSONResponse(status_code=status.HTTP_200_OK, content={"nieruchomosci": nieruchomosci_list})
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))
    
@router.get("/lokale/")
async def get_lokale():
    try:
        lokale_list = list(lokale.find())
        for lokal in lokale_list:
            lokal["_id"] = str(lokal["_id"])  # Konwersja ObjectId na string
        return JSONResponse(status_code=status.HTTP_200_OK, content={"lokale": lokale_list})
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))
    
@router.get("/get_users/")
async def get_users():
    try:
        users_list = list(users.find())
        for user in users_list:
            user["_id"] = str(user["_id"])  # Konwersja ObjectId na string
        return JSONResponse(status_code=status.HTTP_200_OK, content={"users": users_list})
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))
    
@router.get("/zarzad_wspolnoty/")
async def query_all_zarzad_wspolnoty():
    all_board_members = list(board.find())
    for member in all_board_members:
        member["_id"] = str(member["_id"])  # Konwersja ObjectId na string
    return JSONResponse(status_code=status.HTTP_200_OK, content={"zarzad_wspolnoty": all_board_members})