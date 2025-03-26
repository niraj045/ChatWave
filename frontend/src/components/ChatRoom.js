import React, { useEffect, useState } from "react";
import axios from "../services/api";

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

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
    <div>
      <h2>ChatWave - Chat Room</h2>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg.text}</p>
        ))}
      </div>
      <input type="text" placeholder="Type a message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatRoom;
