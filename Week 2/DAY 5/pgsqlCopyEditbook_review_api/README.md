# Book Review API

A FastAPI-based RESTful API for managing books and reviews.

## Features

- User authentication with JWT tokens
- Role-based access control (admin and user roles)
- CRUD operations for books and reviews
- PostgreSQL database integration
- RESTful API endpoints

## Project Structure

```
book_review_api/
│
├── app/
│   ├── main.py          # FastAPI application and routes
│   ├── database.py      # Database configuration
│   ├── models.py        # SQLAlchemy models
│   ├── schemas.py       # Pydantic schemas
│   ├── crud.py          # Database operations
│   ├── auth.py          # Authentication utilities
│   ├── middleware.py    # Custom middleware
│   └── dependencies.py  # FastAPI dependencies
│
├── requirements.txt     # Project dependencies
├── run.py              # Application entry point
└── README.md           # Project documentation
```

## Setup

1. Create a PostgreSQL database named "Book_review_API"

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the application:
```bash
python run.py
```

The API will be available at:
- Main API: http://127.0.0.1:8000
- API Documentation: http://127.0.0.1:8000/docs

## API Endpoints

### Authentication
- POST `/signup` - Register new user
- POST `/login` - Get JWT token

### Books
- POST `/books` - Create new book (authenticated)
- GET `/books` - List all books
- GET `/books/{id}` - Get book details
- PUT `/books/{id}` - Update book (admin only)
- DELETE `/books/{id}` - Delete book (admin only)

### Reviews
- POST `/books/{book_id}/review` - Add review (authenticated)
- GET `/books/{book_id}/reviews` - List book reviews
- DELETE `/reviews/{id}` - Delete review (owner or admin)

### Users
- GET `/users` - List users (admin only)
- DELETE `/users/{id}` - Delete user (admin only)

## Environment Variables

Create a `.env` file with:
```
DATABASE_URL=postgresql://postgres:Admin@localhost/Book_review_API
SECRET_KEY=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
``` 