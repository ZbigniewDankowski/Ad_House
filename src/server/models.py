from pydantic import BaseModel

class User(BaseModel):
    user_id: str
    name: str
    surname: str
    email: str

class UserInDB(User):
    password_hash: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    user_id: str