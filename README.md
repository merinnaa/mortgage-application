## Fundify 
 
 📋 Overview

Fundify is a web-based platform designed to automate the document verification process in mortgage applications. The platform integrates with existing loan management systems of banks, credit unions, and mortgage lenders to streamline the mortgage approval process.

The goal of Fundify is to:
✅ Reduce processing time
✅ Enhance accuracy
✅ Improve user experience

Fundify leverages AI to perform secure, real-time, and error-free document verification, ensuring faster and more accurate decisions for both lenders and borrowers.

 
🗣 Project Status

✅ Backend and frontend fully integrated
✅ Database connected using Neon
✅ Authentication (registration, login, logout) completed
✅ AI-based document verification in development
✅ Deployment on Vercel successful

 
🗄 Tech Stack

Technology                               Purpose
                               

React
	

Front-end framework 

Tailwind CSS
	

Styling and UI framework

Node.js
	

Backend server

Express.js
	

API framwork

Postgress
	

Database

Neon
	

Cloud-hosted Postgres database

JWT
	

Authentication 

Vercel
	

Deployment
light bulb Project Structure 
Frontend (React + Tailwind CSS)

src/
├── components/           # Reusable components
├── hooks/                # Custom React hooks
├── pages/                # Page components 
├── services/             # API calls and request handling
├── context/              # Context API for state management
├── styles/               # Tailwind CSS config
└── App.js                # Main app component 
Backend (Node.js + Express)

server/

├── utils/          # Request handlers (auth, user, documents)
├── DB/               # Database models
├── routes/               # API routes
├── middleware/           # Authentication and validation
└── server.js             # Main server file

 
🌐 Deployment
✅ Frontend:

    Deployed on Vercel:
    👉 frontend 

✅ Backend:

    Deployed on Vercel (Serverless Functions)
    👉 backend

✅ Database:

    Hosted on Neon
    👉 database

 
✅ How to Run Locally
1. Clone the repo:
bash

CopyEdit

git clone https://github.com/your-repo/fundify.git 
2. Install dependencies:
bash

CopyEdit

cd fundify npm install 
3. Set up .env file:
ini

CopyEdit

DATABASE_URL='ep-late-truth-a5t9dio0-pooler.us-east-2.aws.neon.tech'

 JWT_SECRET=helloworld123

 PORT=5432

 VITE_API_URL=http://localhost:5000 
4. Start the backend:
bash

CopyEdit

npm run dev 
5. Start the frontend:
bash

CopyEdit

npm run dev 
🔥 Challenges and Solutions
