# User Management API

A RESTful API for user management with registration and authentication features.

## Features

- User registration with email and password
- User authentication with JWT
- User profile management
- Password hashing with bcrypt
- Rate limiting
- Input validation
- Database transactions
- Error handling

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=your_db_user
   DB_PASS=your_db_password
   DB_NAME=your_db_name
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

4. Create the database:
   ```bash
   createdb your_db_name
   ```

5. Run migrations:
   ```bash
   npx knex migrate:latest
   ```

6. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication

#### Register User
```http
POST /api/users/register
Content-Type: application/json

{
    "email": "user@example.com",
    "username": "username",
    "password": "Password123!",
    "first_name": "John",
    "last_name": "Doe"
}
```

#### Login
```http
POST /api/users/login
Content-Type: application/json

{
    "username": "username",
    "password": "Password123!"
}
```

### User Management

#### Get All Users
```http
GET /api/users?page=1&limit=10
```

#### Get User by ID
```http
GET /api/users/:id
```

#### Update User
```http
PUT /api/users/:id
Content-Type: application/json

{
    "email": "newemail@example.com",
    "username": "newusername",
    "first_name": "New",
    "last_name": "Name"
}
```

## Password Requirements

- At least 8 characters long
- Contains at least one uppercase letter
- Contains at least one lowercase letter
- Contains at least one number
- Contains at least one special character (@$!%*?&)

## Security Features

- Password hashing with bcrypt
- JWT authentication
- Rate limiting
- Input validation
- SQL injection prevention
- XSS protection
- CORS enabled
- Secure password requirements
- Account lockout after failed attempts

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 409: Conflict
- 429: Too Many Requests
- 500: Internal Server Error

## Testing

You can test the API using tools like Postman or curl. Example curl commands:

```bash
# Register
curl -X POST http://localhost:3000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","username":"username","password":"Password123!","first_name":"John","last_name":"Doe"}'

# Login
curl -X POST http://localhost:3000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"username":"username","password":"Password123!"}'

# Get all users
curl http://localhost:3000/api/users

# Get user by ID
curl http://localhost:3000/api/users/123

# Update user
curl -X PUT http://localhost:3000/api/users/123 \
  -H "Content-Type: application/json" \
  -d '{"email":"newemail@example.com","username":"newusername","first_name":"New","last_name":"Name"}'
``` 