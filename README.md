Here’s the full README content formatted for Markdown (`.md`) so you can directly copy and paste it into your `README.md` file:

````markdown
# Online Betting Dashboard

This is a full-stack online betting dashboard built using **Node.js**, **PostgreSQL**, **Docker**, and **Prisma ORM**. The project includes a **backend API** and a **frontend interface** for users to interact with betting events, view odds, and place bets.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Running the Project](#running-the-project)
5. [Running Tests](#running-tests)
6. [Testing with Postman](#testing-with-postman)
7. [Local Environment](#local-environment)
8. [Docker Setup](#docker-setup)
9. [Contributing](#contributing)
10. [License](#license)

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

[Download Postman Collection]({
  "info": {
    "_postman_id": "f7c4c2c9-3ddf-4eb2-b1f4-1e7a3cd9c3e4",
    "name": "Sportsbook API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Get All Events",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:8000/events",
          "protocol": "http",
          "host": ["localhost"],
          "port": "8000",
          "path": ["events"]
        }
      }
    },
    {
      "name": "Get Event by ID",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:8000/events/1",
          "protocol": "http",
          "host": ["localhost"],
          "port": "8000",
          "path": ["events", "1"]
        },
        "description": "Example response for event ID 1:\n\n{\n  \"event_id\": 1,\n  \"event_name\": \"NFL: Chiefs vs Eagles\",\n  \"odds\": 1.75,\n  \"createdAt\": \"2025-05-05T07:24:44.231Z\",\n  \"bets\": [\n    {\n      \"id\": 1,\n      \"amount\": 900,\n      \"playerName\": \"Sanmi\",\n      \"potentialWin\": 1575,\n      \"eventId\": 1,\n      \"createdAt\": \"2025-05-05T07:28:12.467Z\"\n    }\n  ]\n}"
      }
    },
    {
      "name": "Create Event",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"event_name\": \"NBA: Celtics vs Heat\",\n  \"odds\": 1.8\n}"
        },
        "url": {
          "raw": "http://localhost:8000/events",
          "protocol": "http",
          "host": ["localhost"],
          "port": "8000",
          "path": ["events"]
        },
        "description": "Example request body for creating a new event"
      }
    },
    {
      "name": "Update Event",
      "request": {
        "method": "PUT",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"event_name\": \"NFL: Chiefs vs Eagles (Updated)\",\n  \"odds\": 1.8\n}"
        },
        "url": {
          "raw": "http://localhost:8000/events/1",
          "protocol": "http",
          "host": ["localhost"],
          "port": "8000",
          "path": ["events", "1"]
        },
        "description": "Example request body for updating event ID 1"
      }
    },
    {
      "name": "Delete Event",
      "request": {
        "method": "DELETE",
        "header": [],
        "url": {
          "raw": "http://localhost:8000/events/1",
          "protocol": "http",
          "host": ["localhost"],
          "port": "8000",
          "path": ["events", "1"]
        },
        "description": "Example response for successful deletion:\n\n{\n  \"message\": \"Event with ID 1 deleted successfully\"\n}"
      }
    },
    {
      "name": "Get All Bets",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:8000/bets",
          "protocol": "http",
          "host": ["localhost"],
          "port": "8000",
          "path": ["bets"]
        }
      }
    },
    {
      "name": "Get Bet by ID",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:8000/bets/1",
          "protocol": "http",
          "host": ["localhost"],
          "port": "8000",
          "path": ["bets", "1"]
        },
        "description": "Example response for bet ID 1:\n\n{\n  \"id\": 1,\n  \"amount\": 900,\n  \"playerName\": \"Sanmi\",\n  \"potentialWin\": 1575,\n  \"eventId\": 1,\n  \"createdAt\": \"2025-05-05T07:28:12.467Z\"\n}"
      }
    },
    {
      "name": "Create Bet",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"amount\": 200,\n  \"playerName\": \"John\",\n  \"eventId\": 2\n}"
        },
        "url": {
          "raw": "http://localhost:8000/bets",
          "protocol": "http",
          "host": ["localhost"],
          "port": "8000",
          "path": ["bets"]
        },
        "description": "Example request body for creating a new bet on event ID 2 (EPL: Arsenal vs Chelsea)"
      }
    },
    {
      "name": "Update Bet",
      "request": {
        "method": "PUT",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"amount\": 1000,\n  \"playerName\": \"Sanmi Updated\"\n}"
        },
        "url": {
          "raw": "http://localhost:8000/bets/1",
          "protocol": "http",
          "host": ["localhost"],
          "port": "8000",
          "path": ["bets", "1"]
        },
        "description": "Example request body for updating bet ID 1"
      }
    },
    {
      "name": "Delete Bet",
      "request": {
        "method": "DELETE",
        "header": [],
        "url": {
          "raw": "http://localhost:8000/bets/1",
          "protocol": "http",
          "host": ["localhost"],
          "port": "8000",
          "path": ["bets", "1"]
        },
        "description": "Example response for successful deletion:\n\n{\n  \"message\": \"Bet with ID 1 deleted successfully\"\n}"
      }
    }
  ]
}
[Sportsbook_API_Collection.postman_collection.json](https://github.com/user-attachments/files/20034300/Sportsbook_API_Collection.postman_collection.json)
 )


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

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

```

### Key things to do:

1. **Postman Collection**: Remember to replace `link-to-postman-collection.json` with the actual link where the Postman collection file is hosted or where users can download it.
2. **Local Environment Setup**: Ensure users are aware they need to change the `DATABASE_URL` in their `.env` file when running locally.
3. **Run Tests**: I’ve added the instructions for running tests directly in the `frontend` folder.

Now, you can copy and paste this into your `README.md` file!
```
