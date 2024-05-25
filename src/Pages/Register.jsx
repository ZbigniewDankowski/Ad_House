import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      } else {
        console.error("No user data in response");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6 w-2/3 mx-auto mt-8">
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
  );
};

export default Register;
