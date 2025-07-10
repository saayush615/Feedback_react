# ⭐ Feedback App

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application where users can register, log in, and share their feedback by giving ratings and comments across different categories.

## 🔧 Tech Stack

- **Frontend:** React, Tailwind CSS (optional)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **API Testing:** Postman (optional)

## ✅ Features

- User Registration & Login
- JWT-based Authentication
- Submit Feedback:
  - Rating system for different categories (e.g., UI, Performance, etc.)
  - Comment/Thought submission
- View Feedback (based on your app logic: all users or only admin)

## 📦 Installation

### Backend

```bash
cd backend
npm install
npm run dev
````

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## ⚙️ Environment Variables

Create a `.env` file in the backend folder with:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## 🚀 Getting Started

1. Clone the repo
2. Set up the backend and frontend as mentioned above
3. Navigate to `http://localhost:5173` (or your Vite port) to use the app

---

Made with ❤️ using the MERN Stack

