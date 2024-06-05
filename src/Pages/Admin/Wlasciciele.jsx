import React, { useState, useEffect } from "react";
import axios from "axios";

const Wlasciciele = () => {
  const [users, setUsers] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    field: null,
    ascending: true,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/get_users/");
        setUsers(response.data.users);
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
    const sortedData = [...users].sort((a, b) => {
      // Sprawdzanie, czy pole zawiera numeryczne dane, można też użyć funkcji isNaN() lub regex do bardziej złożonych warunków
      let valA = a[field];
      let valB = b[field];
      if (!isNaN(valA) && !isNaN(valB)) {
        // Prosta weryfikacja, czy wartość jest numeryczna
        valA = +valA; // Konwertuje string na liczbę
        valB = +valB; // Konwertuje string na liczbę
      }
      if (valA < valB) return ascending ? -1 : 1;
      if (valA > valB) return ascending ? 1 : -1;
      return 0;
    });
    setUsers(sortedData);
    setSortConfig({ field, ascending });
  };

  if (users.length === 0) {
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
              onClick={() => sortTable("imie")}
            >
              Imię
              {sortConfig.field === "imie" &&
                (sortConfig.ascending ? " ↓ " : " ↑ ")}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
              onClick={() => sortTable("nazwisko")}
            >
              Nazwisko
              {sortConfig.field === "nazwisko" &&
                (sortConfig.ascending ? " ↓ " : " ↑ ")}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              E-mail
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Telefon
            </th>
          </tr>
        </thead>
        <tbody className=" bg-gray-300 divide-x-2 divide-logo_bg divide-y-2 ">
          {users.map((user, index) => (
            <tr
              key={index}
              className="even:bg-logo_bg even:text-letter_color text-logo_bg"
            >
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {user.imie}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {user.nazwisko}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {user.email}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {user.telefon}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Wlasciciele;
