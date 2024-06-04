# E-commerce RESTful API

This project is a backend API for an E-commerce platform built using Node.js and Express. It allows admins to create, update, and delete products, while users can only read products. Authentication and authorization are handled using JSON Web Token (JWT).

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The E-commerce RESTful API provides endpoints for managing products in an online store. Admins have full control over the product data, while regular users can only view product information. The API uses JWT for secure authentication and authorization.

## Features

- Admin can create, update, and delete products.
- Users can view product details.
- Users can register and login to get JWT for authentication.
- Secure authentication and authorization using JWT.
- Error handling and validation.

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Token)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ecommerce-api.git
    cd ecommerce-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=3000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Usage

To use the API, you will need a tool like Postman or cURL to send HTTP requests.

### API Endpoints

#### Authentication

- **POST /api/v1/auth/register** - Register a new user.
  - Request Body:
    ```json
    {
      "username": "yourusername",
      "email": "youremail@example.com",
      "password": "yourpassword"
    }
    ```

- **POST /api/v1/auth/login** - Login and obtain a JWT.
  - Request Body:
    ```json
    {
      "email": "youremail@example.com",
      "password": "yourpassword"
    }
    ```

#### Products

- **GET /api/v1/products** - Get all products (accessible to all users).
- **GET /api/v1/products/:id** - Get a single product by ID (accessible to all users).
- **POST /api/v1/products** - Create a new product (admin only).
  - Request Header:
    ```http
    Authorization: Bearer your_jwt_token
    ```
  - Request Body:
    ```json
    {
      "name": "Product Name",
      "description": "Product Description",
      "price": 100
    }
    ```

- **PUT /api/v1/products/:id** - Update a product by ID (admin only).
  - Request Header:
    ```http
    Authorization: Bearer your_jwt_token
    ```
  - Request Body:
    ```json
    {
      "name": "Updated Product Name",
      "description": "Updated Product Description",
      "price": 150
    }
    ```

- **DELETE /api/v1/products/:id** - Delete a product by ID (admin only).
  - Request Header:
    ```http
    Authorization: Bearer your_jwt_token
    ```

### Authentication

The API uses JWT for authentication. To access protected routes, include the JWT in the `Authorization` header of your requests:

```http
Authorization: Bearer your_jwt_token
