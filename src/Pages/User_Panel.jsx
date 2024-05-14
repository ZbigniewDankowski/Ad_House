import React, { useState } from "react";
import logo from "../assets/logo.png"; // Asumuję, że logo jest importowane w ten sposób.
import axios from "axios";

const UserPanel = ({ user }) => {
  console.log(user);
  const [selectedMenu, setSelectedMenu] = useState("userData");
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    imie: user.imie,
    nazwisko: user.nazwisko,
    email: user.email,
    numer_bloku: user.numer_bloku,
    numer_klatki: user.numer_klatki,
    numer_mieszkania: user.numer_mieszkania,
    telefon: user.telefon,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      // Zakładając, że masz endpoint do aktualizacji danych użytkownika
      const response = await axios.post(
        "http://localhost:8000/update_user/",
        formData
      );
      setIsEditing(false);
      alert("Dane użytkownika zaktualizowane pomyślnie!");
    } catch (error) {
      console.error("Błąd aktualizacji danych:", error);
      alert("Nie udało się zaktualizować danych użytkownika.");
    }
  };

  const menuItems = [
    { key: "start", label: "Start" },
    { key: "userData", label: "Dane użytkownika" },
    { key: "surveys", label: "Ankiety" },
    { key: "settlements", label: "Moje rozliczenia" },
  ];

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="flex flex-col w-44 bg-blue-800 text-white">
        <div className="p-5">
          <img className="mx-auto w-64" src={logo} alt="logo" />
        </div>
        <ul className="flex-grow">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={`p-4 hover:bg-blue-700 cursor-pointer ${
                selectedMenu === item.key ? "bg-blue-700" : ""
              }`}
              onClick={() => setSelectedMenu(item.key)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-grow p-10">
        <h1 className="text-xl font-bold mb-4">
          Witaj
          {" " + user.imie} {user.nazwisko}
        </h1>
        <div className="flex justify-between items-center mb-6">
          <div></div>
        </div>
        <div className="bg-blue-700 p-2 rounded shadow-md">
          {selectedMenu === "userData" && (
            <div className="bg-blue-700 p-2 rounded shadow-md">
              {selectedMenu === "userData" && (
                <div className="flex h-full bg-gray-200">
                  <div className="flex-grow p-10">
                    <h1 className="text-xl font-bold mb-4">
                      Zmień dane użytkownika
                    </h1>
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(formData).map(([key, value]) => (
                          <div key={key}>
                            <label
                              className="block text-sm font-bold mb-2 capitalize"
                              htmlFor={key}
                            >
                              {key.replace(/([A-Z])/g, " $1").trim()}:
                            </label>
                            <input
                              type="text"
                              id={key}
                              name={key}
                              value={value}
                              onChange={handleInputChange}
                              disabled={!isEditing}
                              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                                isEditing ? "focus:shadow-outline" : ""
                              }`}
                            />
                          </div>
                        ))}
                      </div>
                      {isEditing ? (
                        <button
                          type="submit"
                          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                          Zapisz zmiany
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          onClick={() => setIsEditing(true)}
                        >
                          Zmień
                        </button>
                      )}
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}
          {selectedMenu === "surveys" && <p>Tu będą ankiety.</p>}
          {selectedMenu === "settlements" && (
            <p>Tu będą informacje o rozliczeniach.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
