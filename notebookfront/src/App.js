import "./App.css";
import Register from "./components/Register";
import Profile from "./components/Profile";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [IsRegistering, setIsRegistering] = useState(false);
  const [isLogged, setLogged] = useState(false);
  const [curentUser, setCurentUser] = useState({});
  const [users, setUsers] = useState(null);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const registerHandler = () => {
    if (IsRegistering === false) setIsRegistering(true);
    if (IsRegistering === true) setIsRegistering(false);
  };
  useEffect(() => {
    const FetchData = async () => {
      try {
        const resp = await axios.get("/api/users");
        console.log(resp.data);
        setUsers(resp.data);
      } catch (err) {
        console.error(err);
      }
    };
    FetchData();
  }, []);

  const LogUser = () => {
    users.forEach((item) => {
      if (
        credentials.email === item.email &&
        credentials.password === item.password
      ) {
        setLogged(true);
        setCurentUser(item);
      }
    });
  };

  return (
    <div>
      <h1>Welcome to DigiNotes</h1>
      {!isLogged && (
        <div>
          <h1>Login</h1>
          <form>
            <label>Email</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => (credentials.email = e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => (credentials.password = e.target.value)}
            />
            <br />
            <input type="submit" value="Login" onClick={LogUser} />
            <br />
          </form>
        </div>
      )}
      {!isLogged && (
        <button onClick={registerHandler}>
          Don't have an account? Click here to register
        </button>
      )}
      {IsRegistering && !isLogged && <Register />}
      {isLogged && <Profile curentUser={curentUser} />}
    </div>
  );
}

export default App;
