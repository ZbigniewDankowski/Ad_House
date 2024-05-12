// Pages/User_Panel.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserPanel = ({ user }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user && user.user_id) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8000/user/${user.user_id}`
          );
          setUserData(response.data);
        } catch (error) {
          console.error("Błąd pobierania danych użytkownika:", error);
        }
      };

      fetchUserData();
    }
  }, [user]);

  return (
    <div>
      <h2>Panel użytkownika</h2>
      {userData && (
        <div>
          <p>Imię: {userData.name}</p>
          <p>Nazwisko: {userData.surname}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserPanel;
