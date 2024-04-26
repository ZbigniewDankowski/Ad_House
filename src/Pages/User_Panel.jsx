import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const User_Panel = ({ user }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
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

    if (user) {
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

export default User_Panel;
