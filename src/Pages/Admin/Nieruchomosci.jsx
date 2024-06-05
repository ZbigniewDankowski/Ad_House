import React, { useState, useEffect } from "react";
import axios from "axios";

const Nieruchomosci = () => {
  const [nieruchomosci, setNieruchomosci] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/nieruchomosci/"
        );
        console.log(response.data.nieruchomosci);
        console.log(nieruchomosci); // Adres URL zależy od konfiguracji twojego API
        setNieruchomosci(response.data.nieruchomosci[0]);
      } catch (error) {
        console.error("Nie udało się pobrać danych:", error); // Możesz ustawić stan na pusty array lub odpowiednią wartość w przypadku błędu
      }
    };

    fetchData();
  }, []); // Pusta tablica zależności oznacza, że efekt uruchomi się tylko raz po pierwszym renderowaniu

  if (nieruchomosci.length === 0) {
    return <div>Ładowanie danych...</div>;
  }
  const p_class =
    "p-3 text-left  text-lg text-black font-bold inline w-full mx-20";
  return (
    <div className="flex justify-center align-middle w-full h-full">
      <div className="flex flex-col justify-center align-middle w-1/3 h-full m-20 border-2 border-logo_bg rounded-xl ">
        <h3 className="bg-logo_bg h-20 text-letter_color text-center py-4 font-bold text-2xl">
          Lokalizacja
        </h3>
        <p className={p_class}>
          Województwo:{" "}
          <p className="text-letter_color text-lg p-3 inline">
            {nieruchomosci.Wojewodztwo}
          </p>
        </p>
        <p className={p_class}>
          Kod pocztowy:{" "}
          <p className="text-letter_color text-lg p-3 inline">
            {nieruchomosci.Kod_Pocztowy}
          </p>
        </p>
        <p className={p_class}>
          Miasto:{" "}
          <p className="text-letter_color text-lg p-3 inline">
            {nieruchomosci.Miasto}
          </p>
        </p>
        <p className={p_class}>
          Ulica:{" "}
          <p className="text-letter_color text-lg p-3 inline">
            {nieruchomosci.Ulica}
          </p>
        </p>
        <p className={p_class}>
          Numer budynku:{" "}
          <p className="text-letter_color text-lg p-3 inline">
            {nieruchomosci.Numer_Budynku}
          </p>
        </p>
      </div>
      <div className="flex flex-col justify-center align-middle w-1/3 h-full m-20 border-2 border-logo_bg rounded-xl">
        <h3 className="bg-logo_bg h-20 text-letter_color text-center py-4 font-bold text-2xl">
          Dane techniczne
        </h3>
        <p className={p_class}>
          Typ budynku:
          <p className="text-letter_color text-lg p-3 inline">
            {nieruchomosci.Typ_Budynku}
          </p>
        </p>
        <p className={p_class}>
          Liczba mieszkań
          <p className="text-letter_color text-lg p-3 inline">
            {nieruchomosci.Liczba_Mieszkan}
          </p>
        </p>
        <p className={p_class}>
          Powierzchnia całkowita:
          <p className="text-letter_color text-lg p-3 inline">
            {nieruchomosci.Powierzchnia_Calkowita} m2
          </p>
        </p>
        <p className={p_class}>
          Powierzchnia mieszkalna:
          <p className="text-letter_color text-lg p-3 inline">
            {nieruchomosci.Powierzchnia_Mieszkalna} m2
          </p>
        </p>
        <p className={p_class}>
          Powierzchnia Części Wspólnej
          <p className="text-letter_color text-lg p-3 inline">
            {nieruchomosci.Powierzchnia_Cz_Wspolnej} m2
          </p>
        </p>
        <p className={p_class}>
          Powierzchnia Hali Garażowej
          <p className="text-letter_color text-lg p-3 inline">
            {nieruchomosci.Powierzchnia_Hal_Garazowej} m2
          </p>
        </p>
        <p className={p_class}>
          Powierzchnia Lokali Użytkowych
          <p className="text-letter_color text-lg p-3 inline">
            {nieruchomosci.Powierzchnia_Lok_Uzytkowych} m2
          </p>
        </p>
      </div>
    </div>
  );
};

export default Nieruchomosci;
