# 🎰 Online Betting Dashboard

![Image 05-05-2025 at 11 02](https://github.com/user-attachments/assets/cd85efe8-a09b-4177-8e0a-35f43695a79c)

A full-stack betting platform with real-time odds tracking, built with modern web technologies and containerized for easy deployment.

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Event Management** | Create, view, update betting events with dynamic odds |
| **Bet Placement** | User-friendly interface for placing wagers |
| **Real-time Updates** | Live odds and event status tracking |
| **Secure Transactions** | PostgreSQL-backed data integrity |
| **Containerized** | Dockerized for consistent environments |

## 🛠 Tech Stack

**Frontend**  
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4-orange?logo=vite)](https://vitejs.dev/)

**Backend**  
[![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=nodedotjs)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4-lightgrey)](https://expressjs.com/)

**Database**  
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue?logo=postgresql)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5-darkblue?logo=prisma)](https://www.prisma.io/)

**Infrastructure**  
[![Docker](https://img.shields.io/badge/Docker-24-blue?logo=docker)](https://www.docker.com/)
[![Docker Compose](https://img.shields.io/badge/Compose-2-blue)](https://docs.docker.com/compose/)

## 🚀 Getting Started

### Prerequisites

- Docker
- Docker Compose
- PostgreSQL (if running locally instead of Docker)

### Clone the Repository

```bash
git clone https://github.com/yourusername/online-betting-dashboard.git
cd online-betting-dashboard
````
---

## Running the Project

### Using Docker Compose

The easiest way to run both the frontend and backend with Docker is to use the following command:

```bash
docker-compose up --build
```

This will automatically install dependencies and start the services for both the frontend, backend, and the PostgreSQL database. The project will be accessible at:

* Backend API: `http://localhost:8000`
* Frontend App: `http://localhost:3000`

If you need to stop the server for any reason, simply run:

```bash
docker-compose down
```

And to restart it:

```bash
docker-compose up
```

### Running the Project Locally (without Docker)

If you prefer to run the project locally without Docker, follow these steps:

1. **Backend**:

   * Navigate to the `backend` directory and install dependencies:

     ```bash
     npm install
     ```

   * Run the server:

     ```bash
     npm run dev
     ```

2. **Frontend**:

   * Navigate to the `frontend` directory and install dependencies:

     ```bash
     npm install
     ```

   * Run the frontend:

     ```bash
     npm run dev
     ```

---

## Running Tests

### Running Unit Tests

To run the unit tests for the frontend, go to the `frontend` directory and run:

```bash
cd frontend
npm run test
```

This will run the tests and output the results in the terminal.

---

## Testing with Postman

You can test the backend API using the Postman collection provided. Simply import the collection by downloading it directly from the link below:

[Download Postman Collection](https://schema.getpostman.com/json/collection/v2.1.0/collection.json)

Once imported into Postman, you can use the pre-configured requests to test the API endpoints (e.g., view betting events, create bets, etc.).

---

## Local Environment

If you are running the project **locally (not in Docker)**, you'll need to set up a **PostgreSQL** database. You'll also need to configure the **`DATABASE_URL`** in the `.env` file. The URL format should look like:

```
DATABASE_URL=postgresql://postgres:password@localhost:5432/sportsbook
```

Ensure that the PostgreSQL database is running and accessible at the specified URL.

---

## Docker Setup

### Building the Docker Image

If you need to rebuild the project images (for example, after making changes), run:

```bash
docker-compose build
```

### Viewing Logs

You can view logs for both services by running:

```bash
docker-compose logs
```

### Stopping the Containers

To stop the Docker containers:

```bash
docker-compose down
```

---

```

