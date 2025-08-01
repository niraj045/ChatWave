import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      navigate("/chat");
    } catch (error) {
      alert("Login failed!");
    }
  };

  const goToOrder = () => {
    // Allow direct access to order page for demo purposes
    navigate("/order");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Login to ChatWave</h2>
      <div style={{ marginBottom: "15px" }}>
        <input 
          type="email" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}
        />
      </div>
      <button 
        onClick={handleLogin}
        style={{
          width: "100%",
          backgroundColor: "#007bff",
          color: "white",
          padding: "12px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "10px",
          fontSize: "16px"
        }}
      >
        Login
      </button>
      
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <span style={{ color: "#666" }}>or</span>
      </div>
      
      <button 
        onClick={goToOrder}
        style={{
          width: "100%",
          backgroundColor: "#ff6f00",
          color: "white",
          padding: "12px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Order Moto G86 Power (Demo)
      </button>
      
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <span style={{ color: "#666", fontSize: "14px" }}>
          Don't have an account? <a href="/register" style={{ color: "#007bff" }}>Register</a>
        </span>
      </div>
    </div>
  );
}

export default Login;
