import React, { useState, useEffect } from "react";
import axios from "axios";

const Raporty = () => {
  const [raporty, setRaporty] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    field: null,
    ascending: true,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/raporty/");
        console.log(response.data.raporty); // Adres URL zależy od konfiguracji twojego API
        setRaporty(response.data.raporty);
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
    const sortedData = [...raporty].sort((a, b) => {
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
    setRaporty(sortedData);
    setSortConfig({ field, ascending });
  };
  const convertDate = (dateStr) => {
    const parts = dateStr.split(".");
    return `${parts[2]}-${parts[1]}-${parts[0]}`; // Format YYYY-MM-DD
  };

  if (raporty.length === 0) {
    return <div>Ładowanie danych...</div>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-logo_bg border-2 border-logo_bg">
        <thead className="bg-letter_color ">
          <tr>
            <th
              scope="col"
              className="px-6 text-center text-xs font-bold  text-logo_bg uppercase tracking-wider w-1/4 "
              onClick={() => sortTable("Data_Utworzenia")}
            >
              Data utworzenia
              {sortConfig.field === "Data_Utworzenia" &&
                (sortConfig.ascending ? " ↓ " : " ↑ ")}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
              onClick={() => sortTable("Kategoria")}
            >
              Kategoria
              {sortConfig.field === "Kategoria" &&
                (sortConfig.ascending ? " ↓ " : " ↑ ")}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
              onClick={() => sortTable("Opis")}
            >
              Opis
              {sortConfig.field === "Opis" &&
                (sortConfig.ascending ? " ↓ " : " ↑ ")}
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
          {raporty.map((raporty, index) => (
            <tr
              key={index}
              className="even:bg-logo_bg even:text-letter_color text-logo_bg"
            >
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {raporty.Data_Utworzenia}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {raporty.Kategoria}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {raporty.Opis}
              </td>

              <td className="px-3 py-4 whitespace-nowrap text-center">
                <a href={raporty.Link} download={true} target="_blank">
                  Podgląd
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Raporty;
