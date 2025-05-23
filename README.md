# 🎰 Online Betting Dashboard

This is a full-stack online betting dashboard built using **Node.js**, **PostgreSQL**, **Docker**, and **Prisma ORM**. The project includes a **backend API** and a **frontend interface** for users to interact with betting events, view odds, and place bets, built with modern web technologies and containerised for easy deployment.

![Image 05-05-2025 at 11 02](https://github.com/user-attachments/assets/cd85efe8-a09b-4177-8e0a-35f43695a79c)

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Running the Project](#running-the-project)
5. [Running Tests](#running-tests)
6. [Testing with Postman](#testing-with-postman)
7. [Docker Setup](#docker-setup)

---

## Features

- Manage betting events with the ability to view, create, and update events.
- PostgreSQL database for storing betting event data.
- User-friendly interface for placing bets and tracking event outcomes.
- Real-time updates for odds and event statuses.
- Dockerized application for easy setup and deployment.

---

## Tech Stack

- **Frontend**: React, Vite
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL, Prisma ORM
- **Containerization**: Docker, Docker Compose
- **Testing**: Vitest for unit and integration testing
  
---
## Getting Started

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

You'll need to configure the **`DATABASE_URL`** in the `.env` file. The URL format should look like:

```
DATABASE_URL=postgresql://postgres:password@localhost:5432/sportsbook
PORT=8000
```
This one is the default one I used, so my env file looked exactly like above.

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

Ensure that the PostgreSQL database is running and accessible at the specified URL and your database URL is accessible via the .env file like shown above, I used postgres.app to run it locally on my computer.

1. **Backend**:

   * Navigate to the `backend` directory and install dependencies:

     ```bash
     cd backend
     npm install
     npx prisma migrate dev --name init
     npx prisma db seed
     ```

   * Run the server:

     ```bash
     npm run dev
     ```

2. **Frontend**:

   * Navigate to the `frontend` directory and install dependencies:

     ```bash
     cd frontend
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

[Download Postman Collection](https://github.com/Sanmiareoye/online-betting-dashboard/blob/main/backend/Sportsbook_API_Collection.postman_collection.json)

Once imported into Postman, you can use the pre-configured requests to test the API endpoints (e.g., view betting events, create bets, etc.).

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

