import axios from "axios";
import React, { useEffect, useState } from "react";

const Uchwaly_user = () => {
  const [uchwaly, setUchwaly] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/uchwaly/");

        setUchwaly(response.data.uchwaly);
        console.log(response.data);
      } catch (error) {
        console.error("Nie udało się pobrać danych:", error); // Możesz ustawić stan na pusty array lub odpowiednią wartość w przypadku błędu
      }
    };

    fetchData();
  }, []); // Pusta tablica zależności oznacza, że efekt uruchomi się tylko raz po pierwszym renderowaniu

  if (uchwaly.length === 0) {
    return <div>Ładowanie danych...</div>;
  }
  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl text-white py-3 text-center font-bold">
        Uchwały
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
              className="px-6 text-center text-xs font-bold  text-logo_bg uppercase tracking-wider w-1/4 "
            >
              Uchwalono:
            </th>
            <th
              scope="col"
              className="px-6 text-center text-xs font-bold  text-logo_bg uppercase tracking-wider w-1/4 "
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
              Głosy
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-bold text-logo_bg uppercase tracking-wider w-1/4"
            >
              Status
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
          {uchwaly.map((uchwala, index) => (
            <tr
              key={index}
              className="even:bg-logo_bg even:text-letter_color text-logo_bg"
            >
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {uchwala.Data_dodania}
              </td>

              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {uchwala.Opis}
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                <p className="text-green-600 inline">{uchwala.Procent_Za}%</p>{" "}
                <p className="text-red-700 inline">
                  {uchwala.Procent_Przeciw}%
                </p>{" "}
                <p className="text-orange-400 inline">
                  {uchwala.Procent_Wstrzymany}%
                </p>
              </td>
              <td className="px-3 py-4 whitespace-nowrap font-bold text-center">
                {uchwala.Czy_Przyjęta === "Prawda" ? (
                  <p className="text-green-600">Przyjęta</p>
                ) : (
                  <p className="text-red-700">Odrzucona</p>
                )}
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-center">
                <a href={uchwala.Link} download={true} target="_blank">
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

export default Uchwaly_user;
