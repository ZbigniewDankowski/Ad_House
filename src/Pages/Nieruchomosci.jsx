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
        console.log(response.data.nieruchomosci); // Adres URL zależy od konfiguracji twojego API
        setNieruchomosci(response.data.nieruchomosci);
      } catch (error) {
        console.error("Nie udało się pobrać danych:", error); // Możesz ustawić stan na pusty array lub odpowiednią wartość w przypadku błędu
      }
    };

    fetchData();
  }, []); // Pusta tablica zależności oznacza, że efekt uruchomi się tylko raz po pierwszym renderowaniu

  if (nieruchomosci.length === 0) {
    return <div>Ładowanie danych...</div>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-logo_bg border-2 border-logo_bg">
        <thead className="bg-letter_color ">
          <tr>
            <th
              scope="col"
              className="px-6 text-center text-xs font-bold  text-logo_bg uppercase tracking-wider w-1/4"
            >
              Województwo
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Miasto
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Kod Pocztowy
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Ulica
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Nr. budynku
            </th>
            {/* <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Typ budynku
            </th> */}
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Pow. Całkowita
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Pow. Mieszkalna
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Pow. Części Wspólnej
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Pow. Hali garażowej
            </th>
            {/* <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Pow. Lokali Użytkowych
            </th> */}
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Liczba Mieszkań
            </th>
          </tr>
        </thead>
        <tbody className=" bg-gray-300 divide-x-2 divide-logo_bg divide-y-2 ">
          {nieruchomosci.map((nieruchomosc, index) => (
            <tr
              key={index}
              className="even:bg-logo_bg even:text-letter_color text-logo_bg"
            >
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {nieruchomosc.Wojewodztwo}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {nieruchomosc.Miasto}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {nieruchomosc.Kod_Pocztowy}
              </td>

              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {nieruchomosc.Ulica}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {nieruchomosc.Numer_Budynku}
              </td>
              {/* <td className="px-3 py-4 whitespace-nowrap font-bold ">
                {nieruchomosc.Typ_Budynku}
              </td> */}
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {nieruchomosc.Powierzchnia_Calkowita}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {nieruchomosc.Powierzchnia_Mieszkalna}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {nieruchomosc.Powierzchnia_Cz_Wspolnej}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {nieruchomosc.Powierzchnia_Hal_Garazowej}
              </td>
              {/* <td className="px-3 py-4 whitespace-nowrap font-bold ">
                {nieruchomosc.Powierzchnia_Lok_Uzytkowych}
              </td> */}
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {nieruchomosc.Liczba_Mieszkan}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Nieruchomosci;
