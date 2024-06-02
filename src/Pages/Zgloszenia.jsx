import axios from "axios";
import React, { useEffect, useState } from "react";

const Zgloszenia = () => {
  const [zgloszenia, setZgloszenia] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/zgloszenia/");

        setZgloszenia(response.data.zgloszenia);
      } catch (error) {
        console.error("Nie udało się pobrać danych:", error); // Możesz ustawić stan na pusty array lub odpowiednią wartość w przypadku błędu
      }
    };

    fetchData();
  }, []); // Pusta tablica zależności oznacza, że efekt uruchomi się tylko raz po pierwszym renderowaniu

  if (zgloszenia.length === 0) {
    return <div>Ładowanie danych...</div>;
  }
  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl text-white py-3 text-center font-bold">
        Zgłoszenia
      </h1>
      <table className="min-w-full divide-y divide-logo_bg border-2 border-logo_bg">
        <thead className="bg-letter_color ">
          <tr>
            <th
              scope="col"
              className="px-6 text-center text-xs font-bold  text-logo_bg uppercase tracking-wider w-1/4 "
            >
              Zgłaszający
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Z dnia
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Treść zgłoszenia
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className=" bg-gray-300 divide-x-2 divide-logo_bg divide-y-2 ">
          {zgloszenia.map((zgloszenia, index) => (
            <tr
              key={index}
              className="even:bg-logo_bg even:text-letter_color text-logo_bg"
            >
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {zgloszenia.Zgłaszający}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {zgloszenia.Data_Zgloszenia}
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-center">
                {zgloszenia.Treść}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {zgloszenia.Status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Zgloszenia;
