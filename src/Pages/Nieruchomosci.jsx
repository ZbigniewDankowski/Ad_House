import React, { useState, useEffect } from "react";
import axios from "axios";

const Nieruchomosci = () => {
  const [nieruchomosci, setNieruchomosci] = useState(null);
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

  return (
    <div>
      <div className="">
        <table className="max-w-full divide-y divide-gray-200 shadow-sm overflow-x-auto">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Województwo
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Miasto
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Kod Pocztowy
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Dzielica
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Ulica
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Nr.budynku
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Typ budynku
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Pow.Całkowita
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Pow.Mieszkalna
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Pow.Części Wspólnej
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Pow.Hali garażowej
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Pow.Lokali_Użytkowych
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Liczba Mieszkań
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {nieruchomosci.map((nieruchomosc, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {nieruchomosc.Wojewodztwo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {nieruchomosc.Miasto}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {nieruchomosc.Kod_Pocztowy}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {nieruchomosc.Dzielnica}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {nieruchomosc.Ulica}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {nieruchomosc.Numer_Budynku}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {nieruchomosc.Typ_Budynku}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {nieruchomosc.Powierzchnia_Calkowita}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {nieruchomosc.Powierzchnia_Mieszkalna}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {nieruchomosc.Powierzchnia_Cz_Wspolnej}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {nieruchomosc.Powierzchnia_Hal_Garazowej}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {nieruchomosc.Powierzchnia_Lok_Uzytkowych}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {nieruchomosc.Liczba_Mieszkan}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Nieruchomosci;
