import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const Register = () => {
  const [formData, setFormData] = useState({
    imie: "",
    nazwisko: "",
    email: "",
    haslo: "",
    numerBloku: "",
    numerKlatki: "",
    numerMieszkania: "",
    telefon: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalStyle, setModalStyle] = useState("error");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => {
      const updatedState = {
        ...prevState,
        [name]: value,
      };
      return updatedState;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/register_new_user/",
        {
          imie: formData.imie,
          nazwisko: formData.nazwisko,
          email: formData.email,
          haslo: formData.haslo,
          numer_bloku: formData.numerBloku,
          numer_klatki: formData.numerKlatki,
          numer_mieszkania: formData.numerMieszkania,
          telefon: formData.telefon, // To pole jest opcjonalne
        }
      );
      setModalMessage("Poprawne dodano użytkownika");
      setModalStyle("info");
      setModalOpen(true);
    } catch (error) {
      console.error(
        "Błąd rejestracji:",
        error.response ? error.response.data : error.message
      );
      setModalMessage("Nie udało się dodać użytkownika. Spróbuj ponownie");
      setModalStyle("error");
      setModalOpen(true);
    }
  };
  const input_class = "w-1/2 p-3";
  const label_class = "block mb-2 text-md text-white font-bold";
  return (
    <div className="w-3/4 mx-auto ">
      <h3 className="text-center w-full text-white font-bold p-6 text-lg">
        Rejestracja użytkownika
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap align-middle justify-between">
          <div className={input_class}>
            <label
              htmlFor="firstName"
              className="block mb-2 text-md text-white font-bold"
            >
              Imię
            </label>
            <input
              type="text"
              id="imie"
              name="imie"
              value={formData.imie}
              onChange={handleChange}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div className={input_class}>
            <label htmlFor="lastName" className={label_class}>
              Nazwisko
            </label>
            <input
              type="text"
              id="nazwisko"
              name="nazwisko"
              value={formData.nazwisko}
              onChange={handleChange}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div className={input_class}>
            <label htmlFor="email" className={label_class}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div className={input_class}>
            <label htmlFor="password" className={label_class}>
              Hasło
            </label>
            <input
              type="password"
              id="haslo"
              name="haslo"
              value={formData.haslo}
              onChange={handleChange}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div className={input_class}>
            <label htmlFor="blockNumber" className={label_class}>
              Numer bloku
            </label>
            <input
              type="text"
              id="numerBloku"
              name="numerBloku"
              value={formData.numerBloku}
              onChange={handleChange}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div className={input_class}>
            <label htmlFor="staircaseNumber" className={label_class}>
              Numer klatki
            </label>
            <input
              type="text"
              id="numerKlatki"
              name="numerKlatki"
              value={formData.numerKlatki}
              onChange={handleChange}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div className={input_class}>
            <label htmlFor="apartmentNumber" className={label_class}>
              Numer mieszkania
            </label>
            <input
              type="text"
              id="numerMieszkania"
              name="numerMieszkania"
              value={formData.numerMieszkania}
              onChange={handleChange}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div className={input_class}>
            <label htmlFor="phone" className={label_class}>
              Telefon (opcjonalnie)
            </label>
            <input
              type="tel"
              id="telefon"
              name="telefon"
              value={formData.telefon}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div className="w-1/4 mx-auto">
            <button
              className="block px-4 py-2 rounded-lg border-letter_color border-2 text-letter_color bg-black mx-auto mt-6"
              type="submit"
            >
              Zarejestruj użytkownika
            </button>
          </div>
        </div>
      </form>
      <Modal
        isOpen={modalOpen}
        message={modalMessage}
        modal_style={modalStyle}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Register;
