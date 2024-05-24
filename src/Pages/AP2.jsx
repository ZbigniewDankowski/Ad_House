import React, { useState } from "react";

const AdminPanel = () => {
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedSubMenu, setSelectedSubMenu] = useState("");

  // Tymczasowe dane dla menu i podmenu
  const menus = {
    "Dane nieruchomości": [
      "Lista nieruchomości",
      "Dodaj nieruchomość",
      "Statystyki",
    ],
    Użytkownicy: ["Lista użytkowników", "Dodaj użytkownika"],
  };

  const renderContent = () => {
    if (!selectedSubMenu) return <p>Wybierz opcję z podmenu</p>;
    // Tutaj renderujesz różne komponenty w zależności od wybranego subMenu
    return <p>Wyświetlam zawartość dla: {selectedSubMenu}</p>;
  };

  return (
    <div className="h-full flex">
      <aside className="w-1/4 bg-logo_bg p-4 text-letter_color">
        <img src="logo.png" alt="Logo" className="w-1/2 mb-4" />
        {Object.keys(menus).map((menu, index) => (
          <p
            key={index}
            onClick={() => setSelectedMenu(menu)}
            className="cursor-pointer"
          >
            {menu}
          </p>
        ))}
      </aside>
      <main className="flex-1 p-4 bg-white">
        <header className="flex justify-between items-center mb-4">
          <h1>{selectedMenu || "Wybierz menu"}</h1>
          <div>
            <span>Imię i nazwisko</span>
            <button onClick={() => console.log("Wylogowano")} className="ml-4">
              Wyloguj
            </button>
          </div>
        </header>
        <section className="flex">
          <div className="w-1/4 bg-gray-200 p-4">
            {menus[selectedMenu]?.map((subMenu, index) => (
              <p
                key={index}
                onClick={() => setSelectedSubMenu(subMenu)}
                className="cursor-pointer"
              >
                {subMenu}
              </p>
            ))}
          </div>
          <div className="flex-1 bg-white border p-4">{renderContent()}</div>
        </section>
      </main>
    </div>
  );
};

export default AdminPanel;
