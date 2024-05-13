import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const AdminPanel = ({ admin }) => {
  const [adminData, setAdminData] = useState(null);

  const registerForm = () => {
    <Navigate to="/register" />;
  };

  useEffect(() => {
    if (admin) {
      console.log("PPanel");
      setAdminData({
        name: admin.name,
        surname: admin.surname,
        email: admin.email,
        // Możesz dodać więcej pól jeśli są dostępne i potrzebne
      });
    }
  }, [admin]);

  return (
    <div>
      <h2>Panel Administracyjny</h2>
      {adminData && (
        <div>
          <p>Imię: {adminData.name}</p>
          <p>Nazwisko: {adminData.surname}</p>
          <p>Email: {adminData.email}</p>
        </div>
      )}
      <button onClick={registerForm}>Formularz rejestracji</button>
    </div>
  );
};

export default AdminPanel;
