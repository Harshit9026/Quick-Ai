# 🚀 AI SaaS Application — PERN Stack (PostgreSQL, Express, React, Node.js)

A **fully functional AI SaaS platform** built using the **PERN stack**, integrating **Clerk for authentication**, **Stripe for subscriptions**, and **Neon for serverless PostgreSQL**.  
This app enables users to generate articles, blogs, and AI-powered images — and includes advanced tools like background/object removers and resume analysis.

---

## 🧠 Key Features

### 🔐 Authentication
- User sign-up, sign-in, and profile management using **Clerk**
- Session-based protection for secure API access

### 💳 Subscription Billing
- Integrated **Stripe payments**
- Free & premium plans for advanced AI features
- Automatic access management for premium users

### 🗃️ Database
- **Serverless PostgreSQL** hosted on **Neon**
- Stores user data, subscription info, and AI activity logs

---

## ⚙️ AI Features

| Feature | Description |
|----------|-------------|
| 📝 **Article Generator** | Generate full articles by providing title & desired length |
| ✍️ **Blog Title Generator** | Generate blog titles from a keyword & category |
| 🖼️ **AI Image Generator** | Generate creative images using AI prompts |
| 🔲 **Background Remover** | Upload an image and get a transparent background |
| 🎯 **Object Remover** | Upload image & remove unwanted objects via text input |
| 📄 **Resume Analyzer** | Upload your resume & get detailed AI analysis |

---

## 🧩 Tech Stack

**Frontend:** React + Tailwind CSS  
**Backend:** Node.js + Express.js  
**Database:** PostgreSQL (Neon)  
**Auth:** Clerk  
**Payments:** Stripe  
**AI Models:** OpenAI / Replicate API (for image generation & editing)

---

## 🧱 Folder Structure

AI-SaaS-App/
│
├── client/ # React Frontend (Vite)
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── hooks/
│ │ └── utils/
│ └── package.json
│
├── server/ # Express Backend
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ ├── middlewares/
│ └── server.js
│
├── .env.example
├── package.json
└── README.md


---

## 🧰 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ai-saas-pern.git
cd ai-saas-pern

2. Install Dependencies
# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install

3. Create .env files
In /server/.env
PORT=5000
DATABASE_URL=your_neon_postgres_url
CLERK_SECRET_KEY=your_clerk_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
OPENAI_API_KEY=your_openai_api_key

In /client/.env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5000

4. Run Development Servers
# Run backend
cd server
npm run dev

# Run frontend
cd ../client
npm run dev


App will run on:

Frontend → http://localhost:5173  
Backend → http://localhost:5000

🖼️ Screenshots

