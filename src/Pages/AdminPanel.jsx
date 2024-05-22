import React, { useState } from "react";
import logo from "../assets/logo.png"; // Asumuję, że logo jest importowane w ten sposób.
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nieruchomosci from "./Nieruchomosci";

const AdminPanel = ({ admin }) => {
  console.log(admin);
  const [selectedMenu, setSelectedMenu] = useState("start");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState(null);

  const menuItems = [
    { key: "start", label: "Start" },
    { key: "Mieszkancy", label: "Wspólnota" },
    { key: "Księgowosc", label: "Księgowość " },
    { key: "Media", label: "Media" },
    { key: "Dokumenty", label: "Dokumenty" },
    { key: "Uchwaly ", label: "Uchwały " },
    { key: "Zgloszenia ", label: "Zgłoszenia " },
    { key: "Sprawozdania ", label: "Sprawozdania " },
  ];

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="flex flex-col w-44 bg-blue-800 text-white">
        <div className="p-5">
          <img className="mx-auto w-64" src={logo} alt="logo" />
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.key}
                className={`p-4 hover:bg-blue-700 cursor-pointer ${
                  selectedMenu === item.key ? "bg-blue-700" : ""
                }`}
                onClick={() => {
                  setSelectedMenu(item.key);
                  setIsEditing(false);
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="text-center p-4">
            <button onClick={() => navigate("/admin")}>Wyloguj się</button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-grow p-10">
        <h1 className="text-xl font-bold mb-4">
          Witaj
          {" " + admin.imie} {admin.nazwisko}
        </h1>
        <div className="flex justify-between items-center mb-6">
          <div></div>
        </div>
        <div className=" p-2 rounded shadow-md">
          {selectedMenu === "Mieszkancy" && (
            <div>
              <p>Tu będą informacje o mieszkańcach</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/register_new_user/");
                }}
              >
                Zarejestruj użytkownika
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setActiveComponent(<Nieruchomosci />);
                }}
              >
                Pokaż szczegóły nieruchomości
              </button>
              <div>{activeComponent}</div>
            </div>
          )}
          {selectedMenu === "Księgowosc" && <p>Tu będą informacje księgowe.</p>}
          {selectedMenu === "Media" && <p>Tu będą informacje o mediach</p>}
          {selectedMenu === "Finanse" && <p>Tu będą informacje o finansach.</p>}
          {selectedMenu === "Dokumenty" && (
            <p>Tu będą informacje o dokumentach.</p>
          )}
          {selectedMenu === "Uchwaly" && <p>Tu będą informacje o uchwałach.</p>}
          {selectedMenu === "Zgloszenia" && (
            <p>Tu będą informacje o zgłoszeniach.</p>
          )}
          {selectedMenu === "Sprawozdania" && (
            <p>Tu będą informacje o sprawozdaniach.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
