import datetime
from fastapi import  APIRouter, HTTPException, Query, status
from pymongo import MongoClient
from fastapi.responses import JSONResponse
from passlib.context import CryptContext
from models import *

router = APIRouter()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")




client = MongoClient("mongodb+srv://Admin:admin@mongodb.mockvji.mongodb.net/?retryWrites=true&w=majority&appName=MongoDB")
db = client["AdHouse"]  # Nazwa bazy danych
users = db["Users"]  # Kolekcja
admin = db["Admin"]
nieruchomosci = db["Nieruchomosci"]
lokale = db["Lokale"]
board = db["Zarzad_Wspolnoty"]
reports = db["Raporty"]
resolutions = db["Uchwaly"]
complaints = db["Zgloszenia"]
statements = db["Sprawozdania"]
accounting_docs = db["Dokumenty_ksiegowe"]
community_docs = db["Dokumenty_wspolnoty"]
saldo = db["Saldo"]

@router.post("/login/")
async def login(user: UserLogin):
    user_in_db = users.find_one({"email": user.email})
    if user_in_db and pwd_context.verify(user.password, user_in_db.get("haslo", "")):
        # Nie zwracaj hasła ani innych wrażliwych danych
        user_data = {
            "user_id": user_in_db.get("id_wlasciciel"),
            "imie": user_in_db.get("imie"),
            "nazwisko": user_in_db.get("nazwisko"),
            "email": user_in_db.get("email"),
            "adres": user_in_db.get("Adres_Korespondencyjny"),
            "numer_rachunku": user_in_db.get("Nr_Rachunku_Bankowego"),
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

@router.get("/raporty/")
async def query_all_raporty():
    all_reports = list(reports.find())
    for report in all_reports:
        report["_id"] = str(report["_id"])  # Konwersja ObjectId na string
    return JSONResponse(status_code=status.HTTP_200_OK, content={"raporty": all_reports})

@router.get("/uchwaly/")
async def query_all_uchwaly():
    all_resolutions = list(resolutions.find())
    for resolution in all_resolutions:
        resolution["_id"] = str(resolution["_id"])  # Konwersja ObjectId na string
    return JSONResponse(status_code=status.HTTP_200_OK, content={"uchwaly": all_resolutions})

@router.get("/zgloszenia/")
async def query_all_zgloszenia():
    all_complaints = list(complaints.find())
    for complaint in all_complaints:
        complaint["_id"] = str(complaint["_id"])  # Konwersja ObjectId na string
    return JSONResponse(status_code=status.HTTP_200_OK, content={"zgloszenia": all_complaints})

@router.get("/sprawozdania/")
async def query_all_sprawozdania():
    all_statements = list(statements.find())
    for statement in all_statements:
        statement["_id"] = str(statement["_id"])  # Konwersja ObjectId na string
    return JSONResponse(status_code=status.HTTP_200_OK, content={"sprawozdania": all_statements})

@router.get("/d_ksiegowe/")
async def query_all_dokumenty_ksiegowe():
    try:
        all_accounting_docs = list(accounting_docs.find())
        for doc in all_accounting_docs:
            doc["_id"] = str(doc["_id"])  # Konwersja ObjectId na string
            if 'Data_dodania' in doc:
                doc['Data_dodania'] = doc['Data_dodania'].strftime('%d.%m.%Y')
            if 'Data_utworzenia' in doc:
                doc['Data_utworzenia'] = doc['Data_utworzenia'].strftime('%d.%m.%Y')
        return JSONResponse(status_code=status.HTTP_200_OK, content={"d_ksiegowe": all_accounting_docs})
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Internal Server Error")

@router.get("/d_wspolnoty/")
async def query_all_dokumenty_wspolnoty():
    try:
        all_community_docs = list(community_docs.find())
        for doc in all_community_docs:
            doc["_id"] = str(doc["_id"])  # Konwersja ObjectId na string
            if 'Data_dodania' in doc:
                doc['Data_dodania'] = doc['Data_dodania'].strftime('%d.%m.%Y')
            if 'Data_utworzenia' in doc:
                doc['Data_utworzenia'] = doc['Data_utworzenia'].strftime('%d.%m.%Y')
            if 'Data_obowiazywania' in doc:
                doc['Data_obowiazywania'] = doc['Data_obowiazywania'].strftime('%d.%m.%Y')
        return JSONResponse(status_code=status.HTTP_200_OK, content={"d_wspolnoty": all_community_docs})
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Internal Server Error")

@router.get("/saldo/")
async def query_all_saldo():
    all_saldo = list(saldo.find())
    for doc in all_saldo:
        doc["_id"] = str(doc["_id"])  # Konwersja ObjectId na string
    return JSONResponse(status_code=status.HTTP_200_OK, content={"saldo": all_saldo})

@router.get("/get_user_lokale")
async def get_user_lokale(user_id: str = Query(..., description="ID użytkownika")):
    try:
        # Wyszukiwanie lokali na podstawie ID użytkownika
        locale = list(lokale.find({"id_wlasciciel": user_id}))
        if not locale:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No locales found for the given user ID")

        # Konwersja ObjectId na string i przygotowanie odpowiedzi
        for lokal in locale:
            lokal["_id"] = str(lokal["_id"])

        # Aktualny rok
        # current_year = datetime.now().year

        # Wyszukiwanie dokumentów księgowych na podstawie aktualnego roku
        # docs_ksiegowe = list(accounting_docs.find({"Data_utworzenia": {"$gte": datetime(current_year, 1, 1), "$lt": datetime(current_year + 1, 1, 1)}}))

        # Sumowanie kwot dla każdego typu dokumentu
        # doc_summaries = {}
        # for doc in docs_ksiegowe:
        #     typ_dokumentu = doc.get("Typ_dokumentu")
        #     kwota = doc.get("Kwota", 0)
        #     kategoria = doc.get("Kategoria")
        #     id_lokal = doc.get("id_lokal")

        #     # Debugging
        #     print(f"Processing document: {doc}")
        #     print(f"Document category: {kategoria}, id_lokal: {id_lokal}")

        #     if kategoria == "wpłata":
        #         for lokal in locale:
        #             if lokal.get("id_lokal") == id_lokal:
        #                 print(f"Matching id_lokal found: {id_lokal}")
        #                 if "wpłata" not in lokal:
        #                     lokal["wpłata"] = kwota
        #                 else:
        #                     lokal["wpłata"] += kwota
        #     else:
        #         if typ_dokumentu in doc_summaries:
        #             doc_summaries[typ_dokumentu] += kwota
        #         else:
        #             doc_summaries[typ_dokumentu] = kwota

        # # Dodawanie informacji o dokumentach księgowych do każdego lokalu
        # for lokal in locale:
        #     udzial_nieruchomosc = float(lokal.get("Udzial_Nieruchomosc", 1))  # Domyślnie 1, jeśli nie ma wartości
        #     suma_kosztow = 0
        #     for typ_dokumentu, kwota in doc_summaries.items():
        #         koszt = kwota * udzial_nieruchomosc
        #         lokal[typ_dokumentu] = koszt
        #         suma_kosztow += koszt

        #     lokal["Bilans"] = lokal.get("wpłata", 0) - suma_kosztow

        

        return JSONResponse(status_code=status.HTTP_200_OK, content={"lokale": locale})
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))