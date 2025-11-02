# File Sharing App

This is a file-sharing application built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to upload files and share them with others via a unique link.

## Features

-   Upload files to the server.
-   Get a unique link for each uploaded file.
-   Download files using the unique link.

## Tech Stack

**Frontend:**

-   React
-   Vite
-   CSS

**Backend:**

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose
-   Multer

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js (v14 or later)
-   npm
-   MongoDB (Make sure you have a running instance of MongoDB and have the connection string)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/file-sharing-app.git
    cd file-sharing-app
    ```

2.  **Install backend dependencies:**

    ```bash
    npm install
    ```

3.  **Install frontend dependencies:**

    ```bash
    cd frontend
    npm install
    cd ..
    ```

4.  **Create a `.env` file in the root directory and add the following environment variables:**

    ```env
    PORT=8000
    MONGODB_URI=<your_mongodb_connection_string>
    ```

### Running the app

1.  **Start the backend server:**

    ```bash
    npm start
    ```

    The backend server will be running on `http://localhost:9000`.

2.  **Start the frontend development server:**

    ```bash
    cd frontend
    npm run dev
    ```

    The frontend will be running on `http://localhost:5173`.

## API Endpoints

The following API endpoints are available:

-   `POST /upload`: Upload a file.
-   `GET /files/:fileId`: Download a file with the given ID.
