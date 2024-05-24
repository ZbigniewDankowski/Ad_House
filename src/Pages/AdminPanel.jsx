import React, { useState } from "react";
import logo from "../assets/new_logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nieruchomosci from "./Nieruchomosci";
import Wlasciciele from "./Wlasciciele";
import Lokale from "./Lokale";
import Zarzad from "./Zarzad";
import Raporty from "./Raporty";
import Start from "./Start";

const AdminPanel = ({ admin }) => {
  const [selectedMenu, setSelectedMenu] = useState("start");
  const [activeComponentKey, setActiveComponentKey] = useState("start");
  const navigate = useNavigate();

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
    { key: "Media", label: "Media", submenu: [] },
    { key: "Dokumenty", label: "Dokumenty", submenu: [] },
    { key: "Uchwaly", label: "Uchwały", submenu: [] },
    { key: "Zgloszenia", label: "Zgłoszenia", submenu: [] },
    { key: "Sprawozdania", label: "Sprawozdania", submenu: [] },
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
      default:
        return <div>Nie udało się załadować komponentu</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-logo_bg to-letter_color max-w-full">
      <div className="flex w-full">
        <div className="w-44 flex flex-col text-letter_color bg-logo_bg">
          <div className="p-5 border-b border-letter_color">
            <img className="mx-auto" src={logo} alt="Logo" />
          </div>
          <ul className="flex-grow">
            {menuItems.map((item) => (
              <li
                key={item.key}
                className={`p-4 hover:bg-blue-700 cursor-pointer ${
                  selectedMenu === item.key ? "bg-blue-700" : ""
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
                  onClick={() => navigate("/admin")}
                  className="text-letter_color bg-black p-2 rounded"
                >
                  Wyloguj się
                </button>
              </div>
            </div>
            {menuItems.find((item) => item.key === selectedMenu)?.submenu && (
              <div className="w-3/4 h-16 bg-black px-6 mx-auto">
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
          <div className="rounded shadow-md p-4 mt-28 over h-2/4">
            {renderComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
