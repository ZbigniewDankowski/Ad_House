import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import UserPanel from "./Pages/User_Panel";
import AdminLogin from "./Pages/AdminLogin";
import AdminPanel from "./Pages/AdminPanel";
import RegistrationForm from "./Pages/RegistrationForm";

function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  const handleLogin = (userData) => {
    setUser({
      user_id: userData.user_id, // Przykładowy identyfikator użytkownika
      imie: userData.imie,
      nazwisko: userData.nazwisko,
      email: userData.email,
      numer_bloku: userData.numer_bloku,
      numer_klatki: userData.numer_klatki,
      numer_mieszkania: userData.numer_mieszkania,
      telefon: userData.telefon,
    });
  };
  const handleAdminLogin = (adminData) => {
    setAdmin({
      admin_id: adminData.user_id, // Przykładowy identyfikator użytkownika
      name: adminData.name,
      surname: adminData.surname,
      email: adminData.email,
    });
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={
              user ? (
                <Navigate to="/panel" />
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/admin"
            element={
              admin ? (
                <Navigate to="/adminpanel" />
              ) : (
                <AdminLogin onAdminLogin={handleAdminLogin} />
              )
            }
          />
          <Route
            path="/adminpanel"
            element={
              admin ? <AdminPanel admin={admin} /> : <Navigate to="/admin" />
            }
          />
          <Route
            path="/panel"
            element={
              user ? <UserPanel user={user} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/"
            element={user ? <Navigate to="/panel" /> : <Navigate to="/login" />}
          />
          <Route
            path="/register"
            element={
              admin ? <RegistrationForm /> : <Navigate to="/admin_panel" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
