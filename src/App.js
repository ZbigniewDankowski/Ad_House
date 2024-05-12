// src/App.js
import React, { useState } from "react";
import LoginPage from "./Pages/LoginPage";
import UserPanel from "./Pages/User_Panel";

// src/App.js
function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser({
      user_id: userData.user_id, // Przykładowy identyfikator użytkownika
      name: userData.name,
      surname: userData.surname,
      email: userData.email,
    });
  };

  return (
    <div className="App">
      {!user ? <LoginPage onLogin={handleLogin} /> : <UserPanel user={user} />}
    </div>
  );
}

export default App;
