from typing import Optional
from pydantic import BaseModel, Field

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
