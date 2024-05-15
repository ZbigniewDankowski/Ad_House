from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from endpoints import router as user_router


app = FastAPI()

app.include_router(user_router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Umożliwia żądania CORS dla wszystkich domen, dla bezpieczeństwa określ konkretne domeny
    allow_credentials=True,
    allow_methods=["*"],  # Możesz także określić konkretne metody, np. ["GET", "POST"]
    allow_headers=["*"],
)

   







