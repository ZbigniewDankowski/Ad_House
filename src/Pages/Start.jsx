import React, { useState, useEffect } from "react";
import axios from "axios";

const Start = () => {
  const [zarzad, setZarzad] = useState([]);
  const [zgloszenia, setZgloszenia] = useState([]);
  const [saldo, setSaldo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/zarzad_wspolnoty/"
        );
        const response2 = await axios.get("http://localhost:8000/zgloszenia/");
        const response3 = await axios.get("http://localhost:8000/saldo/");

        setZgloszenia(response2.data.zgloszenia);
        setZarzad(response.data.zarzad_wspolnoty);
        setSaldo(response.data.saldo);
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
      <div className="w-1/4 flex flex-col justify-evenly text-center text-black bg-transparent border-2 border-logo_bg rounded-xl">
        <h1 className="font-bold text-2xl bg-logo_bg py-4 text-letter_color">
          Saldo
        </h1>
        <div className="flex-grow flex flex-col justify-evenly text-white">
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

      <div className="w-1/4 flex flex-col justify-evenly text-center text-black bg-transparent border-2 border-logo_bg rounded-xl">
        <h1 className="font-bold text-2xl bg-logo_bg py-4 text-letter_color">
          Zgłoszenia
        </h1>
        <div className="flex-grow flex flex-col justify-evenly text-white">
          {zgloszenia.map((zgloszenie, index) => (
            <div className="cursor-pointer" key={index}>
              <h2>{zgloszenie.Data_Zgłoszenia}</h2>
              <h2>{zgloszenie.Treść}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/4 flex flex-col justify-evenly text-center text-black bg-transparent border-2 border-logo_bg rounded-xl">
        <h1 className="font-bold text-xl bg-logo_bg py-4 text-letter_color">
          Informacje
        </h1>
        <div className="flex-grow flex flex-col justify-evenly text-white">
          <div>
            <h2 className="font-bold text-xl underline">Zarząd</h2>
            {zarzad.map((user, index) => (
              <p key={index}>
                {user.Imie} {user.Nazwisko}
              </p>
            ))}
          </div>
          <div>
            <h2 className="font-bold text-xl underline">
              Numer bankowy wspólnoty
            </h2>
            <p>25 8467 0001 6616 5292 0652 2570</p>
          </div>
          <div>
            <h2 className="font-bold text-xl underline">Kontrahenci</h2>
            <p className="font-semibold">Enea s.a</p>
            <p>Nr. telefonu: 61 4371-453</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
