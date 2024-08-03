import React, { useState } from "react";
import SuccessComponent from "./SuccessComponent";

const LoginComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Basic validation
    if (username === "user" && password === "pass") {
      setIsLoggedIn(true);
    } else {
      setError("Invalid username or password");
    }
  };

  if (isLoggedIn) {
    return <SuccessComponent />;
  }

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => {
              console.log(e);
              setUsername(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LoginComponent;
