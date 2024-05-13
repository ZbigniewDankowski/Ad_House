// Pages/User_Panel.js
import React, { useState, useEffect } from "react";

const UserPanel = ({ user }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      setUserData({
        name: user.name,
        surname: user.surname,
        email: user.email,
        // Możesz dodać więcej pól jeśli są dostępne i potrzebne
      });
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
