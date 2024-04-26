// src/App.js
import React, { useState } from "react";
import LoginPage from "./Pages/LoginPage";
import UserPanel from "./Pages/User_Panel";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <div className="App">
      {!user ? <LoginPage onLogin={handleLogin} /> : <UserPanel user={user} />}
    </div>
  );
}

export default App;
