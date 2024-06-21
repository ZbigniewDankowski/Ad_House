import React, { useState } from "react";
import logo from "../../assets/new_logo.png";
import { useNavigate } from "react-router-dom";
import Nieruchomosci from "../Admin/Nieruchomosci.jsx";
import Wlasciciele from "../Admin/Wlasciciele.jsx";
import Lokale from "../Admin/Lokale.jsx";
import Zarzad from "../Admin/Zarzad.jsx";
import Raporty from "../Admin/Raporty.jsx";
import Start from "../Admin/Start.jsx";
import Register from "../Admin/Register.jsx";
import Sprawozdania from "../Admin/Sprawozdania.jsx";
import Zgloszenia from "../Admin/Zgloszenia.jsx";
import Dokumenty_ksiegowe from "../Admin/Dokumenty_ksiegowe.jsx";
import Dokumenty_wspolnoty from "../Admin/Dokumenty_wspolnoty.jsx";
import Uchwaly from "../Admin/Uchwaly.jsx";
import Naliczenia_nieruchomosc from "./Naliczenia_nieruchomosc.jsx";
import Naliczenia_lokali from "./Naliczenia_lokali.jsx";
import Faktury from "./Faktury.jsx";

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
    {
      key: "Księgowosc",
      label: "Księgowość",
      submenu: [
        { key: "naliczenia_n", label: "Naliczenia nieruchomości" },
        { key: "naliczenia_l", label: "Naliczenia lokali" },
        { key: "faktury", label: "Faktury" },
      ],
    },
    {
      key: "Dokumenty",
      label: "Dokumenty",
      submenu: [
        { key: "d_ksiegowe", label: "Dokumenty księgowe" },
        { key: "d_wspolnoty", label: "Dokumenty wspólnoty" },
        { key: "Sprawozdania", label: "Sprawozdania" },
      ],
    },
    { key: "Uchwaly", label: "Uchwały" },
    { key: "Zgloszenia", label: "Zgłoszenia" },
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
      case "naliczenia_n":
        return <Naliczenia_nieruchomosc />;
      case "naliczenia_l":
        return <Naliczenia_lokali />;
      case "faktury":
        return <Faktury />;

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
          <div className="w-full h-30 xl:h-36 flex flex-col justify-between align-middle">
            <div className="w-full h-16 flex flex-row justify-end">
              <p className="block my-auto font-bold text-white mr-10 text-2xl ">
                {admin.imie} {admin.nazwisko} - administrator
              </p>
              <div className="p-4 text-center">
                <button
                  onClick={handleLogout}
                  className="text-letter_color bg-black px-4 py-2 rounded w-36 border-2 border-letter_color font-bold"
                >
                  Wyloguj
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
          <div className="rounded px-4 mt-10 over xl:max-h-[36rem] overflow-y-auto ">
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
          {activeComponentKey == "lokale" ? (
            <div className="w-full my-6 text-right">
              <button
                className="w-1/6 border-2 border-letter_color p-1 bg-logo_bg text-letter_color font-bold rounded-md mr-6"
                onClick={() => {
                  setActiveComponentKey("lokale");
                }}
              >
                Dodaj lokal
              </button>
            </div>
          ) : null}
          {activeComponentKey == "raporty" ? (
            <div className="w-full my-6 text-right">
              <button
                className="w-1/6 border-2 border-letter_color p-1 bg-logo_bg text-letter_color font-bold rounded-md mr-6"
                onClick={() => {
                  setActiveComponentKey("lokale");
                }}
              >
                Dodaj raport
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
