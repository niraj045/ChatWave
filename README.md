📜 ChatWave - Real-time Chat Application
🔗 Live WebSocket Chat with Spring Boot & React.js
ChatWave is a real-time chat application built using Spring Boot (Backend) and React.js (Frontend). It supports user authentication, WebSocket-based messaging, and MongoDB for storing chat history.


🚀 Features
✅ User Authentication (Register/Login with JWT & Spring Security)
✅ Real-time Chat (WebSocket integration for instant messaging)
✅ MongoDB Storage (Stores chat messages and user data)
✅ Modern UI (Built with React.js & Tailwind CSS)
✅ REST API Support (Spring Boot handles backend communication)

📂 Project Structure
🛠 Backend (Spring Boot - Java)
bash
Copy
Edit
chatwave-backend/
├── src/main/java/com/chatwave/
│   ├── controllers/       # REST API Controllers
│   ├── models/            # Entity Models (User, Message)
│   ├── repositories/      # MongoDB Repositories
│   ├── services/          # Business Logic
│   ├── config/            # Security & WebSocket Configs
│   ├── ChatWaveApplication.java
├── application.properties
💻 Frontend (React.js - JavaScript)
pgsql
Copy
Edit
chatwave-frontend/
├── src/
│   ├── components/        # UI Components (Chat, Login, Register)
│   ├── services/          # API Calls using Axios
│   ├── App.js             # Main Router
│   ├── index.js           # Entry Point
├── public/index.html
├── package.json
🛠 Installation & Setup
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/your-username/chatwave.git
cd chatwave
2️⃣ Backend Setup (Spring Boot)
🔹 Configure MongoDB
Install & Start MongoDB

Create a database: chatwaveDB

🔹 Run Backend
sh
Copy
Edit
cd chatwave-backend
mvn spring-boot:run
Backend runs on: http://localhost:8080

3️⃣ Frontend Setup (React.js)
sh
Copy
Edit
cd chatwave-frontend
npm install
npm start
Frontend runs on: http://localhost:3000

🌐 API Endpoints
🟢 Authentication
Method	Endpoint	Description
POST	/auth/register	Register a new user
POST	/auth/login	Login & get JWT token
💬 Chat API
Method	Endpoint	Description
GET	/messages	Fetch chat history
POST	/messages	Send a new message
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

