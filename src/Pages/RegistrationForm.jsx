import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const logo = require("../assets/new_logo.png");

  const [formData, setFormData] = useState({
    imie: "",
    nazwisko: "",
    email: "",
    haslo: "",
    powtorzHaslo: "",
    numerBloku: "",
    numerKlatki: "",
    numerMieszkania: "",
    telefon: "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => {
      const updatedState = {
        ...prevState,
        [name]: value,
      };

      // Sprawdzanie zgodności haseł jeśli zmieniane jest pole hasło lub powtórz hasło
      if (name === "haslo" || name === "powtorzHaslo") {
        if (
          updatedState.haslo &&
          updatedState.powtorzHaslo &&
          updatedState.haslo !== updatedState.powtorzHaslo
        ) {
          updatedState.passwordError = "Hasła nie są identyczne!";
        } else {
          updatedState.passwordError = "";
        }
      }

      return updatedState;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Opcjonalnie sprawdź, czy hasła są zgodne przed wysłaniem danych
    if (formData.haslo !== formData.powtorzHaslo) {
      alert("Hasła nie są identyczne!");
      return;
    }

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

      setFormData({
        imie: "",
        nazwisko: "",
        email: "",
        haslo: "",
        powtorzHaslo: "",
        numerBloku: "",
        numerKlatki: "",
        numerMieszkania: "",
        telefon: "",
      });
    } catch (error) {
      console.error(
        "Błąd rejestracji:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <img className="mx-auto w-64" src={logo} alt="logo" />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Zarejestruj się w AdHouse
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label
                          htmlFor="firstName"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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

                      <div className="mb-4">
                        <label
                          htmlFor="lastName"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
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

                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
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

                      <div className="mb-4">
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
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

                      <div className="mb-4">
                        <label
                          htmlFor="repeatPassword"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Powtórz hasło
                        </label>
                        <input
                          type="password"
                          id="powtorzHaslo"
                          name="powtorzHaslo"
                          value={formData.powtorzHaslo}
                          onChange={handleChange}
                          required
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="blockNumber"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
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

                      <div className="mb-4">
                        <label
                          htmlFor="staircaseNumber"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
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

                      <div className="mb-4">
                        <label
                          htmlFor="apartmentNumber"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
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

                      <div className="mb-4">
                        <label
                          htmlFor="phone"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
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

                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                          type="submit"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                        >
                          Zarejestruj się
                        </button>
                      </div>
                    </form>
                    {showSuccessModal && (
                      <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
                          <button
                            onClick={() => setShowSuccessModal(false)}
                            className="float-right text-lg font-semibold"
                          >
                            &times;
                          </button>
                          <p className="text-xl font-semibold text-green-500">
                            Sukces!
                          </p>
                          <p>Rejestracja użytkownika zakończona pomyślnie!</p>
                        </div>
                      </div>
                    )}

                    {showErrorModal && (
                      <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
                          <button
                            onClick={() => setShowErrorModal(false)}
                            className="float-right text-lg font-semibold"
                          >
                            &times;
                          </button>
                          <p className="text-xl font-semibold text-red-500">
                            Błąd!
                          </p>
                          <p>
                            Wystąpił błąd podczas rejestracji. Sprawdź
                            poprawność danych!
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      Dołącz do nas i ciesz się nowymi możliwościami!
                    </h4>
                    <p className="text-sm">
                      Przystąp do społeczności AdHouse i odkryj nowy sposób na
                      życie.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
