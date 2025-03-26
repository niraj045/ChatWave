import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/api";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("/auth/register", { username, email, password });
      navigate("/");
    } catch (error) {
      alert("Registration failed!");
    }
  };

  return (
    <div>
      <h2>Register for ChatWave</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
