import axios from "axios";
import React, { useEffect, useState } from "react";

const Zgloszenia = () => {
  const [zgloszenia, setZgloszenia] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    field: null,
    ascending: true,
  });
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

  const sortTable = (field) => {
    let ascending = true;
    if (sortConfig.field === field && sortConfig.ascending) {
      ascending = false;
    }
    const sortedData = [...zgloszenia].sort((a, b) => {
      // Sprawdzanie, czy pole zawiera numeryczne dane, można też użyć funkcji isNaN() lub regex do bardziej złożonych warunków
      let valA = a[field];
      let valB = b[field];
      if (field.includes("Data")) {
        // Zakładając, że nazwy pól zawierające daty mają w nazwie "Data"
        valA = convertDate(valA);
        valB = convertDate(valB);
      } else if (!isNaN(valA) && !isNaN(valB)) {
        // Prosta weryfikacja, czy wartość jest numeryczna
        valA = +valA; // Konwertuje string na liczbę
        valB = +valB; // Konwertuje string na liczbę
      }
      if (valA < valB) return ascending ? -1 : 1;
      if (valA > valB) return ascending ? 1 : -1;
      return 0;
    });
    setZgloszenia(sortedData);
    setSortConfig({ field, ascending });
  };
  const convertDate = (dateStr) => {
    const parts = dateStr.split(".");
    return `${parts[2]}-${parts[1]}-${parts[0]}`; // Format YYYY-MM-DD
  };

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
              onClick={() => sortTable("Zgłaszający")}
            >
              Zgłaszający
              {sortConfig.field === "Zgłaszający" &&
                (sortConfig.ascending ? " ↓ " : " ↑ ")}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
              onClick={() => sortTable("Data_Zgloszenia")}
            >
              Z dnia
              {sortConfig.field === "Data_Zgloszenia" &&
                (sortConfig.ascending ? " ↓ " : " ↑ ")}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
              onClick={() => sortTable("Treść")}
            >
              Treść zgłoszenia
              {sortConfig.field === "Treść" &&
                (sortConfig.ascending ? " ↓ " : " ↑ ")}
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
              onClick={() => sortTable("Status")}
            >
              Status
              {sortConfig.field === "Status" &&
                (sortConfig.ascending ? " ↓ " : " ↑ ")}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Odpowiedź
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Akcje
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
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                <a className="underline" href="#">
                  Edytuj
                </a>
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                <a className="underline" href="#">
                  Podgląd
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="w-1/6 border-2 border-letter_color p-1 bg-logo_bg text-letter_color font-bold rounded-md mr-6 mt-6 ">
        {" "}
        Dodaj zgłoszenie
      </button>
    </div>
  );
};

export default Zgloszenia;
