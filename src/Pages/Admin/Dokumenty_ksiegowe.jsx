import axios from "axios";
import React, { useEffect, useState } from "react";

const Dokumenty_ksiegowe = () => {
  const [dokumenty, setDokumenty] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/d_ksiegowe/");

        setDokumenty(response.data.d_ksiegowe);
      } catch (error) {
        console.error("Nie udało się pobrać danych:", error); // Możesz ustawić stan na pusty array lub odpowiednią wartość w przypadku błędu
      }
    };

    fetchData();
  }, []); // Pusta tablica zależności oznacza, że efekt uruchomi się tylko raz po pierwszym renderowaniu

  if (dokumenty.length === 0) {
    return <div>Ładowanie danych...</div>;
  }
  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl text-white py-3 text-center font-bold">
        Dokumenty księgowe
      </h1>
      <table className="min-w-full divide-y divide-logo_bg border-2 border-logo_bg">
        <thead className="bg-letter_color ">
          <tr>
            <th
              scope="col"
              className="px-6 text-center text-xs font-bold  text-logo_bg uppercase tracking-wider w-1/4 "
            >
              Data dodania
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Obowiązuje od:
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Opis
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Link
            </th>
          </tr>
        </thead>
        <tbody className=" bg-gray-300 divide-x-2 divide-logo_bg divide-y-2 ">
          {dokumenty.map((dokument, index) => (
            <tr
              key={index}
              className="even:bg-logo_bg even:text-letter_color text-logo_bg"
            >
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {dokument.Data_dodania}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {dokument.Data_obowiazywania}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {dokument.Opis}
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-center">
                <a href={dokument.Link} download={true} target="_blank">
                  Podgląd
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="w-1/6 border-2 border-letter_color p-1 bg-logo_bg text-letter_color font-bold rounded-md mr-6 mt-6 ">
        {" "}
        Dodaj dokument
      </button>
    </div>
  );
};

export default Dokumenty_ksiegowe;
