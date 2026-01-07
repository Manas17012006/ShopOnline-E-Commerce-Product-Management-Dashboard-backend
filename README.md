
# Project Overview:

This is the backend service for the Server-Rendered E-Commerce Product Management Dashboard.It is built using the MERN stack (Node.js, Express, MongoDB) and provides secure APIs for authentication, product management, admin operations, and image handling.The backend is designed to support an admin-only dashboard, ensuring secure access using JWT-based authentication, role-based authorization, and protected routes.


## Features:

1) Authentication & Authorization:

Signup, Login, Logout,
JWT-based authentication,
Role-based access (ADMIN, CUSTOMER),
Protected admin-only routes.

2) Admin Management

Secure admin onboarding (only admins can add new admins),
Admin role verification middleware.

3) Product Management (CRUD)

Create, Read, Update, Delete products,Category & sub-category handling,Bestseller flag support.

4) Image Upload

Secure image uploads using Cloudinary,Multiple product images supported.

5) Dashboard Data APIs

APIs to support charts & analytics (used by frontend Recharts).

6) Security
Password hashing using bcrypt,JWT expiration handling,Environment variable protection.
## Tech Stack

Runtime: Node.js

Framework: Express.js

Database: MongoDB (Atlas / Local)

Authentication: JWT (stored on client)

Password Hashing: bcrypt

Image Storage: Cloudinary

Email Service: Nodemailer (Gmail SMTP)

Environment Management: dotenv
## Project Structure
```

backend/
│
├── config/
│   ├── cloudinary.js        # Cloudinary config (image upload)
│   ├── nodemailer.js        # Email service (verification, OTP)
│
├── controllers/
│   ├── auth.controller.js   # Signup, login, logout, verification
│   ├── user.controller.js   # User profile, admin actions
│   ├── product.controller.js# Product CRUD
│   └── order.controller.js  # Order placement & management
│
├── middleware/
│   ├── auth.mw.js            # JWT verification & role check
│   ├── multer.js             # File upload middleware
│ 
│
├── models/
│   ├── user.model.js         # User schema
│   ├── product.model.js      # Product schema
│   └── order.model.js        # Order schema
│
├── routes/
│   ├── auth.routes.js        # /api/auth/*
│   ├── user.routes.js        # /api/users/*
│   ├── product.routes.js    # /api/products/*
│   └── order.routes.js      # /api/orders/*
│
├── .env                      # Environment variables
├── .gitignore
├── index.js                  # App entry point
├── package.json
├── package-lock.json
├── vercel.json               # Deployment config
└── README.md                 # Backend documentation
```
## Environment Variables
```
# Server
PORT=8080
NODE_ENV=development

# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_key

# Admin (optional)
ADMIN_PASSWORD=your_admin_password

# SMTP / Email (Brevo)
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
SENDER_EMAIL=your_sender_email

# Cloudinary (Image Uploads)
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

```
## Deployment

Install Dependencies

```bash
  npm install
```

Start Server

```bash
  npm run dev
```


## Demo Video of E-Commerce app

https://youtu.be/sSSdhi_nCRU?si=LtuZ-OgNeWJ23aqg

This demo video showcases all core functionalities of the application, highlighting both the customer-facing experience and the complete admin panel workflow.
## Dummy Admin Credentials

Email-address: none48504@gmail.com

Password: January@2026
