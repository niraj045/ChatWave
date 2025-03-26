📜 ChatWave - Real-time Chat Application
🔗 Live WebSocket Chat with Spring Boot & React.js
ChatWave is a real-time chat application built using Spring Boot (Backend) and React.js (Frontend). It supports user authentication, WebSocket-based messaging, and MongoDB for storing chat history.


🚀 Features
✅ User Authentication (Register/Login with JWT & Spring Security)
✅ Real-time Chat (WebSocket integration for instant messaging)
✅ MongoDB Storage (Stores chat messages and user data)
✅ Modern UI (Built with React.js & Tailwind CSS)
✅ REST API Support (Spring Boot handles backend communication)

🌐 API Endpoints
🟢 Authentication
Method	Endpoint	Description
POST	/auth/register	Register a new user
POST	/auth/login	Login & get JWT token
💬 Chat API
Method	Endpoint	Description
GET	/messages	Fetch chat history
POST /messages	Send a new message
🔗 WebSocket Connection
Feature	URL
Connect	ws://localhost:8080/chat
Send Msg	/app/sendMessage
Receive	/topic/messages
📌 Tech Stack
Backend: Java, Spring Boot, Spring Security, JWT, MongoDB

Frontend: React.js, Axios, WebSocket API

Database: MongoDB

Authentication: JWT (JSON Web Token)

Real-time Communication: WebSocket

