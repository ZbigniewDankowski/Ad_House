import axios from "axios";
import React, { useEffect, useState } from "react";

const Sprawozdania = () => {
  const [sprawozdania, setSprawozadania] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    field: null,
    ascending: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/sprawozdania/");

        setSprawozadania(response.data.sprawozdania);
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
    const sortedData = [...sprawozdania].sort((a, b) => {
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
    setSprawozadania(sortedData);
    setSortConfig({ field, ascending });
  };
  const convertDate = (dateStr) => {
    const parts = dateStr.split(".");
    return `${parts[2]}-${parts[1]}-${parts[0]}`; // Format YYYY-MM-DD
  };

  if (sprawozdania.length === 0) {
    return <div>Ładowanie danych...</div>;
  }
  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl text-white py-3 text-center font-bold">
        Sprawozdania
      </h1>
      <table className="min-w-full divide-y divide-logo_bg border-2 border-logo_bg">
        <thead className="bg-letter_color ">
          <tr>
            <th
              scope="col"
              className="px-6 text-center text-xs font-bold  text-logo_bg uppercase tracking-wider w-1/4 "
              onClick={() => sortTable("Data_Dodania")}
            >
              Data dodania
              {sortConfig.field === "Data_Dodania" &&
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
            >
              Link
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Uwagi
            </th>
          </tr>
        </thead>
        <tbody className=" bg-gray-300 divide-x-2 divide-logo_bg divide-y-2 ">
          {sprawozdania.map((sprawozdania, index) => (
            <tr
              key={index}
              className="even:bg-logo_bg even:text-letter_color text-logo_bg"
            >
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {sprawozdania.Data_Dodania}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {sprawozdania.Kategoria}
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-center">
                <a href={sprawozdania.Link} download={true} target="_blank">
                  Podgląd
                </a>
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {sprawozdania.Uwagi}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="w-1/6 border-2 border-letter_color p-1 bg-logo_bg text-letter_color font-bold rounded-md mr-6 mt-6 ">
        {" "}
        Dodaj sprawozdanie
      </button>
    </div>
  );
};

export default Sprawozdania;
