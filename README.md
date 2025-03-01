# 🛒 MERN E-Commerce App

A **full-stack** e-commerce application built using the **MERN stack (MongoDB, Express, React, Node.js)** with **TypeScript** for a scalable and production-ready backend.

---

## 🚀 Features

### **🔹 User Features**

- 🔑 **Authentication & Authorization** (JWT-based)
- 🛍️ **Browse & Search Products**
- 🛒 **Add to Cart & Checkout**
- 💳 **Payment Integration**
- ⭐ **Product Reviews & Ratings**

### **🔹 Admin Features**

- 📦 **Manage Products & Orders**
- 👥 **User Management**
- 📊 **Sales Dashboard**

### **🔹 Tech Stack**

- 🖥️ **Frontend:** React, TypeScript, Tailwind CSS
- 🔥 **Backend:** Node.js, Express, TypeScript, MongoDB, Mongoose
- 🔑 **Auth:** JWT, bcrypt
- 💰 **Payments:** Stripe (or Razorpay)
- 📡 **State Management:** Redux Toolkit / Zustand
- 🌐 **API Testing:** Postman, Swagger Docs
- ☁️ **Deployment:** Vercel (Frontend), Render/Railway (Backend)

---

## 📂 Project Structure

/ecommerce │── backend/ # Backend (Node.js, Express, MongoDB) │ ├── src/ │ │ ├── config/ # Database & environment config │ │ ├── models/ # Mongoose models │ │ ├── routes/ # API routes │ │ ├── controllers/ # Business logic │ │ ├── middleware/ # Authentication & validation │ │ ├── utils/ # Helper functions │ │ ├── server.ts # Entry point │ ├── package.json │── frontend/ # Frontend (React, TypeScript) │ ├── src/ │ │ ├── components/ # UI components │ │ ├── pages/ # Pages & views │ │ ├── store/ # State management (Redux/Zustand) │ │ ├── App.tsx # Root component │ ├── package.json │── .gitignore │── README.md │── .env # Environment variables (Not committed)

yaml
Copy
Edit

---

## ⚙️ Installation & Setup

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/prasant-0n/ecommerce_webapp.git
cd ecommerce
2️⃣ Backend Setup
bash
Copy
Edit
cd backend
npm install
cp .env.example .env  # Add your MongoDB & JWT secrets
npm run dev           # Start backend (nodemon)
3️⃣ Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm run dev           # Start frontend
🛠️ API Documentation
📜 Swagger API Docs: http://localhost:5000/api-docs
🛠 Postman Collection: (Import in Postman)
🚀 Deployment
Frontend: Vercel / Netlify
Backend: Render / Railway / AWS
Database: MongoDB Atlas
📌 Contributing
Fork the repo & submit a PR. Contributions are welcome!
🛡 License
This project is licensed under the MIT License.

📞 Contact
Author: `Hemant Kumar Sahoo`
GitHub: `@prasant-0n`
Email: `your-email@example.com`


---

