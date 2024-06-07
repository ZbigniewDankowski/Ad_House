import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/new_logo.png";
import UserPulpit from "./UserPulpit";
import Raporty from "../Admin/Raporty";
import Uchwaly_user from "./Uchwaly_user";
import axios from "axios";
import Naliczenia from "./Naliczenia";

const UserPanel = ({ user }) => {
  const [selectedMenu, setSelectedMenu] = useState("pulpit");
  const [activeComponentKey, setActiveComponentKey] = useState("pulpit");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/get_user_lokale?user_id=${user.user_id}`
        );
        console.log("Dane" + response);
        setInfo(response.data.lokale); // aktualizacja stanu lokalami
      } catch (error) {
        console.error("Nie udało się pobrać danych:", error);
      }
    };
    fetchData();
  }, []);

  const menuItems = [
    { key: "pulpit", label: "Pulpit" },
    {
      key: "rachunki",
      label: "Rozrachunki i płatności",
      submenu: [
        { key: "naliczenia", label: "Naliczenia opłat" },
        { key: "konsolidacja", label: "Konsolidacja opłat" },
        { key: "raporty_oplat", label: "Raporty" },
      ],
    },
    {
      key: "Dokumenty",
      label: "Dokumenty",
    },
    { key: "Uchwaly", label: "Uchwały" },
    { key: "Zgloszenia", label: "Zgłoszenia" },
    {
      key: "Dane",
      label: "Dane",
      submenu: [
        { key: "info_w", label: "Informacje o właścicielu" },
        { key: "info_m", label: "Informacje o mieszkaniu" },
      ],
    },
  ];
  const selectedSubmenu =
    menuItems.find((item) => item.key === selectedMenu)?.submenu || [];

  const renderComponent = () => {
    switch (activeComponentKey) {
      case "pulpit":
        return <UserPulpit />;
      case "raporty_oplat":
        return <Raporty />;
      case "Uchwaly":
        return <Uchwaly_user />;
      case "naliczenia":
        return <Naliczenia />;
      default:
        return <div>Nie udało się załadować komponentu</div>;
    }
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    window.location.reload();
    navigate("/admin"); // Przekierowanie na stronę logowania
  };
  return (
    <div className=" w-screen h-screen bg-gradient-to-b from-logo_bg to-letter_color pb-3">
      <div className="w-full h-2/5 flex flex-col justify-start align-top ">
        <div className="p-2 h-24 w-full flex justify-between align-middle bg-logo_bg border-b-2 border-letter_color">
          <div className=" h-full">
            <img className="mx-auto w-30 h-full block" src={logo} alt="Logo" />
          </div>
          <div className="text-xl p-4 text-letter_color">Nazwa wspólnoty</div>
          <div className="p-4 text-center w-1/6">
            <button
              onClick={handleLogout}
              className="text-letter_color bg-black p-2 rounded border-2 border-letter_color"
            >
              Wyloguj
            </button>
          </div>
        </div>
        <div className="w-2/4 h-1/3  border-l-2 border-letter_color self-end flex text-center bg-logo_bg">
          <div className="w-1/2 h-1/4 text-letter_color flex flex-col ">
            <p className="py-2 my-2"> Numer mieszkania: </p>
            <p className="py-2 my-2">Nazwa mieszkania: </p>
          </div>
          <div className="w-1/2 h-1/4 my-auto text-letter_color"></div>
        </div>
        <div className="w-full h-30 bg-logo_bg">
          <ul className="w-full h-full flex justify-evenly align-middle text-letter_color border-t-2 border-letter_color">
            {menuItems.map((item) => (
              <li
                key={item.key}
                className={`p-4  cursor-pointer ${
                  selectedMenu === item.key
                    ? "border-b-2 border-letter_color"
                    : ""
                }`}
                onClick={() => {
                  setSelectedMenu(item.key);
                  if (item.submenu && item.submenu.length > 0) {
                    setActiveComponentKey(item.submenu[0].key); // Ustaw pierwszy element submenu jako aktywny
                  } else {
                    setActiveComponentKey(item.key); // Jeśli nie ma submenu, ustaw klucz elementu jako aktywny
                  }
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        {menuItems.find((item) => item.key === selectedMenu)?.submenu && (
          <div className="w-full h-16 bg-logo_bg px-6 mx-auto mt-2 border-b-2 border-letter_color">
            <ul className="w-full h-full flex flex-row justify-evenly text-letter_color bg-logo_bg text-center my-auto">
              {menuItems
                .find((item) => item.key === selectedMenu)
                .submenu.map((sub) => (
                  <li
                    key={sub.key}
                    className={`cursor-pointer my-auto px-6 ${
                      activeComponentKey === sub.key
                        ? " border-b-2 border-letter_color"
                        : "hover:border-b-2 border-letter_color"
                    }`}
                    onClick={() => {
                      setActiveComponentKey(sub.key);
                    }}
                  >
                    {sub.label}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      <div className="h-3/5 w-full p-4">{renderComponent()}</div>
    </div>
  );
};

export default UserPanel;
