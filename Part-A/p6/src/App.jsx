import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const errors = {};
    if (!username.trim()) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setErrors({});
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="app">
      {!isLoggedIn ? (
        <form onSubmit={handleLogin} className="login-form">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
            />
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      ) : (
        <h2 className="welcome">Welcome, {username}</h2>
      )}
    </div>
  );
}

export default App;
