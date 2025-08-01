import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/api";

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/messages").then((response) => {
      setMessages(response.data);
    });
  }, []);

  const sendMessage = async () => {
    await axios.post("/messages", { text: message });
    setMessages([...messages, { text: message }]);
    setMessage("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2>ChatWave - Chat Room</h2>
        <button 
          onClick={() => navigate("/order")}
          style={{
            backgroundColor: "#ff6f00",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px"
          }}
        >
          Order Moto G86 Power
        </button>
      </div>
      
      <div style={{ border: "1px solid #ddd", padding: "15px", height: "300px", overflowY: "scroll", marginBottom: "15px" }}>
        {messages.map((msg, index) => (
          <p key={index}>{msg.text}</p>
        ))}
      </div>
      
      <div style={{ display: "flex", gap: "10px" }}>
        <input 
          type="text" 
          placeholder="Type a message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          style={{ flex: 1, padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}
        />
        <button 
          onClick={sendMessage}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatRoom;
