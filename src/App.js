import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import LoginPage from "./Pages/User/LoginPage";
import UserPanel from "./Pages/User/User_Panel";
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminPanel from "./Pages/Admin/AdminPanel";

function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    if (user) {
      console.log("Zalogowany jako użytkownik:", user);
    }
  }, [user]); // Reagowanie na zmiany w user

  useEffect(() => {
    if (admin) {
      console.log("Zalogowany jako admin:", admin);
    }
  }, [admin]); // Reagowanie na zmiany w admin

  const handleLogin = (userData) => {
    console.log(userData);
    setUser({
      user_id: userData.user_id, // Przykładowy identyfikator użytkownika
      imie: userData.imie,
      nazwisko: userData.nazwisko,
      email: userData.email,
      numer_rachunku: userData.numer_rachunku,
      adres: userData.adres,
      telefon: userData.telefon,
    });
  };
  const handleAdminLogin = (adminData) => {
    setAdmin({
      admin_id: adminData.user_id, // Przykładowy identyfikator użytkownika
      imie: adminData.imie,
      nazwisko: adminData.nazwisko,
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
