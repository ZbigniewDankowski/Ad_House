import React, { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import axios from "axios";

const AdminLogin = ({ onAdminLogin }) => {
  const logo = require("../assets/logo.png");

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
      const response = await axios.post("http://localhost:8000/admin_login/", {
        email,
        password,
      });
      console.log("Response data:", response.data);
      if (response.data && response.data.user) {
        onAdminLogin(response.data.user); // Teraz przekazujesz dane użytkownika do funkcji onLogin
      } else {
        console.error("No user data in response");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };
  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap justify-center">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img className="mx-auto w-64" src={logo} alt="logo" />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Panel logowania administratora
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <p className="m-4 font-bold">Zaloguj się</p>
                      {/* <!--Username input--> */}
                      <TEInput
                        type="email"
                        label="E-mail"
                        className="mb-4"
                        onChange={handle_email}
                      ></TEInput>

                      {/* <!--Password input--> */}
                      <TEInput
                        type="password"
                        label="Hasło"
                        className="mb-4"
                        onChange={handle_password}
                      ></TEInput>

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <TERipple rippleColor="light" className="w-full">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="submit"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Zaloguj się
                          </button>
                        </TERipple>

                        {/* <!--Forgot password link--> */}
                      </div>

                      {/* <!--Register button--> */}
                    </form>
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
export default AdminLogin;