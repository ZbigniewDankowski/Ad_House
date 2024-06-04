import React, { useState, useEffect } from "react";
import axios from "axios";

const Zarzad = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/zarzad_wspolnoty/"
        );
        console.log(response.data);
        setUsers(response.data.zarzad_wspolnoty);
      } catch (error) {
        console.error("Nie udało się pobrać danych:", error); // Możesz ustawić stan na pusty array lub odpowiednią wartość w przypadku błędu
      }
    };

    fetchData();
  }, []); // Pusta tablica zależności oznacza, że efekt uruchomi się tylko raz po pierwszym renderowaniu

  if (users.length === 0) {
    return <div>Ładowanie danych...</div>;
  }
  return (
    <div className="w-full h-full p-10 flex flex-wrap  align-middle justify-evenly">
      {users.map((user, index) => (
        <div
          key={index}
          className=" p-4 w-1/4 h-full flex flex-col align-middle justify-center text-center border-2 border-logo_bg rounded-lg"
        >
          <div className=" flex flex-col w-full h-full overflow-hidden min-h-72">
            <div
              style={{
                backgroundImage: `url(${user.Foto})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="w-full flex-grow"
            ></div>
          </div>
          <div className="text-lg bg-logo_bg h-1/3 text-letter_color p-3">
            <p className="font-bold text-2xl mb-4">{user.Funkcja}</p>
            <p>
              {user.Imie} {user.Nazwisko}
            </p>
            <p>{user.Telefon}</p>
            <p>{user.Email}</p>
          </div>
          <button className="pt-3 font-semibold">Edytuj</button>
        </div>
      ))}
    </div>
  );
};

export default Zarzad;
