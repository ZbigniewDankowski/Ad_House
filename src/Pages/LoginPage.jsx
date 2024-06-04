// Pages/LoginPage.js
import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const LoginPage = ({ onLogin }) => {
  const logo = require("../assets/new_logo.png");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalStyle, setModalStyle] = useState("error");

  const handle_email = (e) => {
    setEmail(e.target.value);
  };

  const handle_password = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login/", {
        email,
        password,
      });
      if (response.data && response.data.user) {
        onLogin(response.data.user); // Teraz przekazujesz dane użytkownika do funkcji onLogin
        setModalOpen(false);
      } else {
        console.log("No user in database");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setModalMessage(
        "Nie udało się znaleźć użytkownika! Sprawdź poprawność danych logowania"
      );
      setModalOpen(true);
    }
  };

  // reszta komponentu pozostaje bez zmian
  return (
    <section className="h-screen flex bg-gradient-to-b from-logo_bg from-60% to-letter_color">
      <div className="w-2/3 h-3/4 my-auto mx-10flex flex-col items-center justify-center">
        <div className="w-full h-full flex flex-wrap flex-col p-6 mx-auto">
          <div className="p-6 w-2/3 h-full mx-auto bg-white border-letter_color border-2 flex flex-col justify-center">
            <h2 className="text-center text-4xl font-bold mb-6">Zaloguj się</h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 w-2/3 mx-auto mt-8"
            >
              <div>
                <label className="block mb-2 font-semibold" htmlFor="email">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 border-2 rounded-md border-letter_color"
                  onChange={handle_email}
                />
              </div>
              <div className="pb-10">
                <label className="block mb-2 font-semibold" htmlFor="password">
                  Hasło
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full p-2 border-2 rounded-md border-letter_color"
                  onChange={handle_password}
                />
              </div>
              <button
                type="submit"
                className="block w-1/3 mx-auto p-2 text-letter_color bg-black rounded-lg"
              >
                Zaloguj
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-2/3 flex flex-col items-center justify-start">
        <img className="mb-4 w-80 p-10" src={logo} alt="logo" />
        <div className="m-20 text-letter_color p-6 w-2/3">
          <p className="text-3xl text-center">Witaj w panelu użytkownika</p>
          <p className="my-6 mx-10 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            laoreet dignissim turpis vitae ultrices. Aliquam risus nulla,
            vehicula nec elementum ac, eleifend ac odio. Vivamus lacinia leo eu
            nibh maximus, sed imperdiet augue feugiat. Morbi turpis leo, semper
            in nibh eu, suscipit eleifend nisi. Nunc imperdiet pulvinar massa
            quis lacinia. Ut sed nunc venenatis, lobortis felis eu, pellentesque
            tortor.
          </p>
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        message={modalMessage}
        modal_style={modalStyle}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};

export default LoginPage;
