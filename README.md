# Fibonacci API

![Docker](https://img.shields.io/badge/Docker-Containerized-blue.svg)
![Express](https://img.shields.io/badge/Express-v4.17.1-green.svg)
![Node.js](https://img.shields.io/badge/Node.js-v14-ubuntu.svg)

This is a simple backend API built using Express.js that calculates the Fibonacci number for a given input. The API is containerized using Docker, allowing it to run consistently across different environments.

```bash
# Clone the Repository
git clone https://github.com/ahmedabougabal/Express_Fibonacci_API.git
cd Express_Fibonacci_API

# Build the Docker Image
docker build -t fibonacci-api .

# Run the Docker Container
docker run -p 8080:8080 fibonacci-api

# API Endpoint
curl http://localhost:8080/fibonacci  ... or just type in the following URL in your browser : http://localhost:8080/
