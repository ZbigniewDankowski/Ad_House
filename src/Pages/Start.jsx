import React, { useState, useEffect } from "react";
import axios from "axios";

const Start = () => {
  const [zarzad, setZarzad] = useState([]);
  const [zgloszenia, setZgloszenia] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/zarzad_wspolnoty/"
        );
        const response2 = await axios.get("http://localhost:8000/zgloszenia/");

        setZgloszenia(response2.data.zgloszenia);
        setZarzad(response.data.zarzad_wspolnoty);

        console.log("zarzad", response.data.zarzad_wspolnoty); // Logowanie bezpośrednio z odpowiedzi
        console.log("zgloszenia", response2.data.zgloszenia);
      } catch (error) {
        console.error("Nie udało się pobrać danych:", error);
      }
    };

    fetchData();
  }, []);

  if (zarzad.length === 0 || zgloszenia.length === 0) {
    return <div>Ładowanie danych...</div>;
  }
  return (
    <div className="w-full h-full flex flex-wrap justify-evenly">
      <div className="w-1/4 p-4 flex flex-col justify-evenly text-center text-black bg-white border-2 border-logo_bg rounded-xl">
        <h1 className="font-bold p-6 text-2xl">Saldo</h1>
        <div className="flex-grow flex flex-col justify-evenly">
          <div>
            <h2 className="font-bold">Bieżące saldo:</h2>
            <p className="p-2">5000zł</p>
          </div>
          <div>
            <h2 className="font-bold">Bieżące zaległości:</h2>
            <p className="p-2">-1000zł</p>
          </div>
        </div>
      </div>

      <div className="w-1/4 p-4 flex flex-col justify-evenly text-center text-black bg-white border-2 border-logo_bg rounded-xl">
        <h1 className="font-bold p-6 text-2xl">Zgłoszenia</h1>
        <div className="flex-grow flex flex-col justify-evenly">
          {zgloszenia.map((zgloszenie, index) => (
            <div key={index}>
              <h2>{zgloszenie.Data_Zgłoszenia}</h2>
              <h2>{zgloszenie.Treść}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/4 p-4 flex flex-col justify-evenly text-center text-black bg-white border-2 border-logo_bg rounded-xl">
        <h1 className="font-bold p-6 text-2xl">Informacje</h1>
        <div className="flex-grow flex flex-col justify-evenly">
          <div>
            <h2 className="font-bold">Zarząd</h2>
            {zarzad.map((user, index) => (
              <p key={index}>
                {user.Imie} {user.Nazwisko}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-bold">Numer bankowy</h2>
          <p>xxxxx xxxx </p>
        </div>
        <div>
          <h2>Kontrahenci</h2>
          <p>xxxxx xxxx </p>
        </div>
      </div>
    </div>
  );
};

export default Start;
