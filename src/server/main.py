from fastapi import FastAPI, HTTPException, Depends, status, APIRouter
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from pydantic import BaseModel, EmailStr
from passlib.context import CryptContext
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse




app = FastAPI()

# Konfiguracja middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adresy, które mają być dozwolone
    allow_credentials=True,
    allow_methods=["*"],  # Dopuszczenie wszystkich metod
    allow_headers=["*"],  # Dopuszczenie wszystkich nagłówków
)

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class UserResponse(BaseModel):
    user_id: int
    name: str
    surname: str
    email: EmailStr

class UserInDB(BaseModel):
    user_id: int
    name: str
    surname: str
    email: EmailStr
    hashed_password: str

class UserIn(BaseModel):
    email: EmailStr
    password: str

db_client = AsyncIOMotorClient("mongodb://localhost:27017")
db: AsyncIOMotorDatabase = db_client.AdHouse

async def get_user_by_email(email: str) -> Optional[UserInDB]:
    user = await db.Users.find_one({"email": email})
    if user:
        return UserInDB(**user)  # Poprawne rozwinięcie danych użytkownika
    return None

async def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

async def authenticate_user(email: str, password: str):
    user = await get_user_by_email(email)
    if not user or not verify_password(password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    return user

@app.post("/login/")
async def login(user_in: UserIn):
    try:
        user = await authenticate_user(user_in.email, user_in.password)
        return UserResponse(**user.dict())
    except Exception as e:
        return JSONResponse(status_code=500, content={"message": str(e)})