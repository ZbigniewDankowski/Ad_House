import React, { useState, useEffect } from "react";
import axios from "axios";

const Lokale = () => {
  const [lokale, setLokale] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/lokale/");
        setLokale(response.data.lokale);
        console.log(response.data.lokale);
      } catch (error) {
        console.error("Nie udało się pobrać danych:", error); // Możesz ustawić stan na pusty array lub odpowiednią wartość w przypadku błędu
      }
    };

    fetchData();
  }, []); // Pusta tablica zależności oznacza, że efekt uruchomi się tylko raz po pierwszym renderowaniu

  if (lokale.length === 0) {
    return <div>Ładowanie danych...</div>;
  }
  return (
    <div className="max-h-[36rem]">
      <table className="min-w-full divide-y divide-logo_bg border-2 border-logo_bg ">
        <thead className="bg-letter_color sticky top-0 z-10 h-16">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold  text-logo_bg uppercase tracking-wider w-1/4"
            >
              Numer mieszkania
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Powierzchnia mieszkania
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Liczba stanowisk garażowych
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Powierzchnia stanowisk garażowych
            </th>
          </tr>
        </thead>
        <tbody className=" bg-gray-300 divide-x-2 divide-logo_bg divide-y-2">
          {lokale.map((lokal, index) => (
            <tr
              key={index}
              className="even:bg-logo_bg even:text-letter_color text-logo_bg"
            >
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {lokal.Nr_Mieszkania}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {lokal.Powierzchnia_Mieszkania}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {lokal.Stanowisk_Garazowych}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {lokal.Powierzchnia_Garażowa}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lokale;
