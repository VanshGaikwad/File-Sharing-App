# 🚀 File Sharing App  

**Live Demo:** 🔗 [https://file-sharing-app-vtsk.onrender.com](https://file-sharing-app-vtsk.onrender.com)

A modern and secure **File Sharing Web Application** built using the **MERN stack (MongoDB, Express.js, React, Node.js)**.  
It enables users to **upload files, generate unique shareable links, and download files seamlessly** with an intuitive user interface and reliable backend.

---

## ✨ Features  

- 📤 Upload Files easily to the cloud  
- 🔗 Generate a unique shareable link for each upload  
- 📥 Download files using the generated link  
- ⚡ Fast and lightweight frontend powered by Vite  
- 🧩 Secure and scalable backend using MongoDB and Multer  

---

## 🛠️ Tech Stack  

**Frontend:**  
React (Vite), CSS  

**Backend:**  
Node.js, Express.js, MongoDB, Mongoose, Multer  

---

## ⚙️ Getting Started  

Follow these steps to set up and run the project locally on your system.  

### ✅ Prerequisites  

Make sure you have installed:  
- Node.js (v14 or higher)  
- npm  
- MongoDB (local or cloud instance)  

---

### 📦 Installation  

1. Clone the repository and open it in your code editor  
2. Install backend dependencies using `npm install`  
3. Open the frontend folder and install frontend dependencies using `npm install`  
4. Create a `.env` file in the root directory and add:  
   - PORT=9000  
   - MONGODB_URI=<your_mongodb_connection_string>  

---

### ▶️ Running the App  

Start the backend server using `npm start`  
The backend will run on `http://localhost:9000`  

Start the frontend development server using `npm run dev` inside the frontend folder  
The frontend will run on `http://localhost:5173`  

---

## 📡 API Endpoints  

| Method | Endpoint           | Description                     |
|:-------|:-------------------|:---------------------------------|
| POST   | /upload            | Upload a file                    |
| GET    | /files/:fileId     | Download a file by its unique ID |

---

## 📁 Folder Structure  

file-sharing-app/  
│  
├── backend/  
│   ├── controllers/  
│   ├── models/  
│   ├── routes/  
│   ├── uploads/  
│   └── index.js  
│  
├── frontend/  
│   ├── src/  
│   ├── public/  
│   └── vite.config.js  
│  
├── .env  
├── package.json  
└── README.md  

---

## 💡 Future Enhancements  

- User Authentication (Google / Email login)  
- File upload progress tracking  
- Cloud storage integration (AWS S3 / Firebase)  
- File expiry and download limit system  
- Responsive drag-and-drop upload interface  

---

## 🧠 Learning Highlights  

- Built a secure file-sharing system using Multer and Express  
- Integrated MongoDB for storing file metadata and links  
- Deployed a full-stack MERN application on Render  
- Strengthened knowledge of REST APIs and frontend-backend communication  

---

## 👨‍💻 Author  

**Vansh Gaikwad**  
Full Stack Developer  

🏆 *“Simple, fast, and secure — File Sharing made effortless.”*
