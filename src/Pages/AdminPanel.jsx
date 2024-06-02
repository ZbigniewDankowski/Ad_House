import React, { useState } from "react";
import logo from "../assets/new_logo.png";
import { useNavigate } from "react-router-dom";
import Nieruchomosci from "./Nieruchomosci";
import Wlasciciele from "./Wlasciciele";
import Lokale from "./Lokale";
import Zarzad from "./Zarzad";
import Raporty from "./Raporty";
import Start from "./Start";
import Register from "./Register";
import Sprawozdania from "./Sprawozdania.jsx";
import Zgloszenia from "./Zgloszenia.jsx";
import Dokumenty_ksiegowe from "./Dokumenty_ksiegowe.jsx";
import Dokumenty_wspolnoty from "./Dokumenty_wspolnoty.jsx";
import Uchwaly from "./Uchwaly.jsx";

const AdminPanel = ({ admin }) => {
  const [selectedMenu, setSelectedMenu] = useState("start");
  const [activeComponentKey, setActiveComponentKey] = useState("start");

  const navigate = useNavigate();

  const handleLogout = () => {
    window.location.reload();
    navigate("/admin"); // Przekierowanie na stronę logowania
  };

  const menuItems = [
    { key: "start", label: "Start" },
    {
      key: "Wspólnota",
      label: "Wspólnota",
      submenu: [
        { key: "nieruchomosci", label: "Dane nieruchomości" },
        { key: "lokale", label: "Dane lokali" },
        { key: "wlasciciele", label: "Właściciele" },
        { key: "zarzad", label: "Zarząd wspólnoty" },
        { key: "raporty", label: "Raporty" },
      ],
    },
    { key: "Księgowosc", label: "Księgowość", submenu: [] },
    {
      key: "Dokumenty",
      label: "Dokumenty",
      submenu: [
        { key: "d_ksiegowe", label: "Dokumenty księgowe" },
        { key: "d_wspolnoty", label: "Dokumenty wspólnoty" },
      ],
    },
    { key: "Uchwaly", label: "Uchwały" },
    { key: "Zgloszenia", label: "Zgłoszenia" },
    { key: "Sprawozdania", label: "Sprawozdania" },
  ];
  const selectedSubmenu =
    menuItems.find((item) => item.key === selectedMenu)?.submenu || [];

  const renderComponent = () => {
    switch (activeComponentKey) {
      case "start":
        return <Start />;
      case "nieruchomosci":
        return <Nieruchomosci />;
      case "lokale":
        return <Lokale />;
      case "wlasciciele":
        return <Wlasciciele />;
      case "zarzad":
        return <Zarzad />;
      case "raporty":
        return <Raporty />;
      case "register":
        return <Register />;
      case "Sprawozdania":
        return <Sprawozdania />;
      case "Zgloszenia":
        return <Zgloszenia />;
      case "d_ksiegowe":
        return <Dokumenty_ksiegowe />;
      case "d_wspolnoty":
        return <Dokumenty_wspolnoty />;
      case "Uchwaly":
        return <Uchwaly />;
      default:
        return <div>Nie udało się załadować komponentu</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-logo_bg to-letter_color pb-3">
      <div className="flex w-full">
        <div className="w-44 flex flex-col text-letter_color bg-logo_bg h-screen">
          <div className="p-5 border-b border-letter_color">
            <img className="mx-auto" src={logo} alt="Logo" />
          </div>
          <ul className="flex-grow">
            {menuItems.map((item) => (
              <li
                key={item.key}
                className={`p-4 hover:bg-letter_color hover:text-logo_bg cursor-pointer ${
                  selectedMenu === item.key
                    ? "bg-letter_color text-logo_bg"
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
        <div className="flex-grow">
          <div className="w-full h-1/3 flex flex-col justify-between align-middle">
            <div className="w-full h-16 flex flex-row justify-end">
              <p className="block my-auto font-bold text-white mr-10">
                {admin.imie} {admin.nazwisko}
              </p>
              <div className="p-4 text-center">
                <button
                  onClick={handleLogout}
                  className="text-letter_color bg-black p-2 rounded"
                >
                  Wyloguj się
                </button>
              </div>
            </div>
            {menuItems.find((item) => item.key === selectedMenu)?.submenu && (
              <div className="w-3/4 h-16 bg-logo_bg px-6 mx-auto">
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
          <div className="rounded px-4 mt-10 over  max-h-[36rem] overflow-y-auto ">
            {activeComponentKey == "register" ? (
              <div className="w-full my-6 text-left">
                <button
                  className="w-1/6 border-2 border-letter_color p-1 bg-logo_bg text-letter_color font-bold rounded-md mr-6"
                  onClick={() => {
                    setActiveComponentKey("wlasciciele");
                  }}
                >
                  Wróć
                </button>
              </div>
            ) : null}
            {renderComponent()}
          </div>
          {activeComponentKey == "wlasciciele" ? (
            <div className="w-full my-6 text-right">
              <button
                className="w-1/6 border-2 border-letter_color p-1 bg-logo_bg text-letter_color font-bold rounded-md mr-6"
                onClick={() => {
                  setActiveComponentKey("register");
                }}
              >
                Dodaj użytkownika
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
