import React, { useState, useEffect } from "react";

const Naliczenia_nieruchomosc = () => {
  const [nieruchomosci, setNieruchomosci] = useState([]);
  const data = [
    {
      numer_bankowy: "PL61109010140000071219812874",
      nazwa_mieszkania: "Tarcza",
      przychody: 4500,
      koszty: 1500,
      data: "2024-06-08",
      saldo: 3000,
    },
    {
      numer_bankowy: "PL62109010140000071319812875",
      nazwa_mieszkania: "Miecz",
      przychody: 5500,
      koszty: 1800,
      data: "2024-06-08",
      saldo: 3700,
    },
    {
      numer_bankowy: "PL63109010140000071419812876",
      nazwa_mieszkania: "Hełm",
      przychody: 6000,
      koszty: 2000,
      data: "2024-06-08",
      saldo: 4000,
    },
  ];
  const [sortConfig, setSortConfig] = useState({
    field: null,
    ascending: true,
  });
  useEffect(() => {
    setNieruchomosci(data);
  }, []); // Pusta tablica zależności oznacza, że efekt uruchomi się tylko raz po pierwszym renderowaniu

  const sortTable = (field) => {
    let ascending = true;
    if (sortConfig.field === field && sortConfig.ascending) {
      ascending = false;
    }
    const sortedData = [...nieruchomosci].sort((a, b) => {
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
    setNieruchomosci(sortedData);
    setSortConfig({ field, ascending });
  };
  const convertDate = (dateStr) => {
    const parts = dateStr.split(".");
    return `${parts[2]}-${parts[1]}-${parts[0]}`; // Format YYYY-MM-DD
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-logo_bg border-2 border-logo_bg">
        <thead className="bg-letter_color ">
          <tr>
            <th
              scope="col"
              className="px-6 text-center text-xs font-bold  text-logo_bg uppercase tracking-wider w-1/6 "
              onClick={() => sortTable("Konto")}
            >
              Konto
              {sortConfig.field === "Konto" &&
                (sortConfig.ascending ? " ↓ " : " ↑ ")}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/6"
              onClick={() => sortTable("Nazwa")}
            >
              Nazwa
              {sortConfig.field === "Nazwa" &&
                (sortConfig.ascending ? " ↓ " : " ↑ ")}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/6"
              onClick={() => sortTable("Przychody")}
            >
              Przychody
              {sortConfig.field === "Przychody" &&
                (sortConfig.ascending ? " ↓ " : " ↑ ")}
            </th>
            <th
              scope="col"
              className="px-6 text-center text-xs font-bold  text-logo_bg uppercase tracking-wider w-1/6 "
              onClick={() => sortTable("Koszty")}
            >
              Koszty
              {sortConfig.field === "Konto" &&
                (sortConfig.ascending ? " ↓ " : " ↑ ")}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/6"
              onClick={() => sortTable("Data")}
            >
              Data
              {sortConfig.field === "Data" &&
                (sortConfig.ascending ? " ↓ " : " ↑ ")}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/6"
              onClick={() => sortTable("Saldo")}
            >
              Saldo
              {sortConfig.field === "Saldo" &&
                (sortConfig.ascending ? " ↓ " : " ↑ ")}
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
                {nieruchomosc.numer_bankowy}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {nieruchomosc.nazwa_mieszkania}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {nieruchomosc.przychody} zł
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {nieruchomosc.koszty} zł
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {nieruchomosc.data}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {nieruchomosc.saldo} zł
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Naliczenia_nieruchomosc;
