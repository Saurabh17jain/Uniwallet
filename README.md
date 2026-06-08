# 💳 UniWallet

<div align="center">

# 🚀 UniWallet – Real-Time Financial Dashboard

### Track Markets • Analyze Charts • Manage Accounts • Automated Data Pipelines

🌐 **Live Website:** http://uniwallet.tasksprint.online

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-green?style=for-the-badge&logo=mongodb)
![Docker](https://img.shields.io/badge/Docker-blue?style=for-the-badge&logo=docker)
![Nginx](https://img.shields.io/badge/Nginx-green?style=for-the-badge&logo=nginx)
![AWS EC2](https://img.shields.io/badge/AWS-EC2-orange?style=for-the-badge&logo=amazonaws)
![GitHub Actions](https://img.shields.io/badge/GitHub-Actions-black?style=for-the-badge&logo=githubactions)

</div>

---

## 📖 Overview

**UniWallet** is a production-grade financial dashboard built using **Next.js**, **MongoDB**, **Finnhub API**, **Inngest**, and **Dockerized cloud infrastructure**.

The platform allows users to:

- Create and manage accounts securely
- Login and maintain authenticated sessions
- View real-time stock market information
- Analyze chart movements and market trends
- Access financial data through a responsive dashboard
- Receive continuously updated market information

The application is fully containerized, automatically deployed through GitHub Actions, and hosted on AWS EC2 behind an Nginx reverse proxy.

---

## ✨ Features

### 🔐 Authentication

- User Registration
- User Login
- Session Management
- Protected Routes
- Secure Authentication Flow

### 📈 Market Dashboard

- Real-Time Stock Data
- Interactive Charts
- Live Market Updates
- Financial Analytics
- Responsive Dashboard UI

### ⚡ Event-Driven Architecture

- Inngest Workflows
- Background Processing
- Automated Event Handling
- Reliable Data Synchronization

### 🗄️ Database

- MongoDB Atlas
- Mongoose ODM
- Optimized Queries
- Scalable Architecture

### 🚀 DevOps

- Dockerized Deployment
- GitHub Actions CI/CD
- AWS EC2 Hosting
- Nginx Reverse Proxy
- Automated Production Deployments

---

## 🏗️ System Architecture

```text
                   ┌─────────────────────┐
                   │     User Browser    │
                   └──────────┬──────────┘
                              │
                              ▼
                   ┌─────────────────────┐
                   │       Nginx         │
                   │ Reverse Proxy Layer │
                   └──────────┬──────────┘
                              │
                              ▼
                   ┌─────────────────────┐
                   │     Next.js App     │
                   │    Dockerized       │
                   └───────┬─────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼

  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
  │ MongoDB     │   │ Finnhub API │   │   Inngest   │
  │ Atlas       │   │ Market Data │   │ Workflows   │
  └─────────────┘   └─────────────┘   └─────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

- Next.js 15
- React.js
- TypeScript
- Tailwind CSS

### Backend

- Next.js API Routes
- Node.js
- Better Auth
- Mongoose

### Database

- MongoDB Atlas

### APIs & Services

- Finnhub API
- Gemini API
- Nodemailer
- Inngest

### DevOps & Infrastructure

- Docker
- GitHub Actions
- AWS EC2
- Nginx

---

## 🚀 CI/CD Pipeline

The project follows a complete CI/CD workflow using GitHub Actions.

### Pipeline Flow

```text
Developer Pushes Code
          │
          ▼
GitHub Repository
          │
          ▼
GitHub Actions
          │
          ▼
Docker Image Build
          │
          ▼
DockerHub Push
          │
          ▼
SSH Into EC2
          │
          ▼
Pull Latest Image
          │
          ▼
Restart Container
          │
          ▼
Production Updated
```

### Automated Workflow

✅ Docker Build

✅ Docker Push

✅ SSH Deployment

✅ EC2 Update

✅ Container Restart

✅ Zero Manual Deployment

---

## 🐳 Docker Deployment

### Pull Image

```bash
docker pull <dockerhub-username>/my-nextjs-app:latest
```

### Create Environment File

```bash
nano .env
```

### Add Variables

```env
NEXT_PUBLIC_BASE_URL=

MONGODB_URI=

BETTER_AUTH_SECRET=

BETTER_AUTH_URL=

GEMINI_API_KEY=

NODEMAILER_EMAIL=

NODEMAILER_PASSWORD=

NEXT_PUBLIC_FINNHUB_API_KEY=
```

### Run Container

```bash
docker run -d \
--name uniwallet \
-p 3000:3000 \
--env-file .env \
<dockerhub-username>/my-nextjs-app:latest
```

---

## ⚙️ Local Development Setup

### Clone Repository

```bash
git clone https://github.com/Saurabh17jain/Uniwallet.git

cd Uniwallet
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create:

```bash
.env.local
```

Add:

```env
NEXT_PUBLIC_BASE_URL=

MONGODB_URI=

BETTER_AUTH_SECRET=

BETTER_AUTH_URL=

GEMINI_API_KEY=

NODEMAILER_EMAIL=

NODEMAILER_PASSWORD=

NEXT_PUBLIC_FINNHUB_API_KEY=
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🌍 Production Infrastructure

| Service | Purpose |
|----------|----------|
| AWS EC2 | Hosting |
| Docker | Containerization |
| Nginx | Reverse Proxy |
| GitHub Actions | CI/CD |
| MongoDB Atlas | Database |
| Finnhub API | Market Data |
| Inngest | Background Jobs |

---

## 📊 Key Highlights

### 🚀 Engineering

- Built 10+ RESTful APIs
- Implemented scalable full-stack architecture
- Automated deployment workflow
- Dockerized production environment

### 📈 Financial Analytics

- Real-time stock information
- Interactive market dashboards
- Live chart monitoring
- Continuous market updates

### 🔒 Security

- Secure authentication
- Environment-based configuration
- Session management
- Protected routes

### ⚙️ Scalability

- Event-driven workflows
- Background job processing
- Cloud-native deployment
- Containerized infrastructure

---

## 💼 Resume Highlights

### UniWallet | Jan 2025 – Feb 2025

**Tech Stack:** Next.js, MongoDB, Finnhub API, Inngest, React.js

- Designed and implemented a full-stack financial dashboard enabling real-time market monitoring and analysis.
- Built and integrated **10+ RESTful APIs** to facilitate high-performance communication between frontend and backend services.
- Developed a scalable event-driven architecture using **Inngest** for workflow orchestration and automated background processing.
- Integrated **Finnhub API** to provide live stock market data and real-time chart updates.
- Containerized the application using **Docker** and deployed it on **AWS EC2** behind an **Nginx Reverse Proxy**.
- Implemented a complete **CI/CD pipeline using GitHub Actions**, enabling automated deployments on every push to the main branch.

---

## 👨‍💻 Author

### Saurabh Kumar Jain &&  Shamma Garg

- Full Stack Developer
- MERN Stack Developer
- DevOps Enthusiast
- Cloud & Deployment Engineer

### Connect

- GitHub: https://github.com/Saurabh17jain

---

<div align="center">

### ⭐ Star this repository if you found it useful.

Built with ❤️ using Next.js, MongoDB, Docker, AWS EC2, Nginx, Inngest and Finnhub API.

</div>
