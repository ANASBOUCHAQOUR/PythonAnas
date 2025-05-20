# app/books.py
from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from . import schemas, crud
from .database import get_db
from .dependencies import get_current_user

router = APIRouter()

@router.post("/books")
def create_book(book: schemas.BookCreate, db: Session = Depends(get_db), user=Depends(get_current_user)):
    return crud.create_book(db, book, user["id"])

@router.get("/books")
def list_books(db: Session = Depends(get_db)):
    return crud.get_books(db)

@router.put("/books/{book_id}")
def update_book(book_id: int, book: schemas.BookCreate, db: Session = Depends(get_db), user=Depends(get_current_user)):
    db_book = crud.get_book(db, book_id)
    if not db_book or (db_book.owner_id != user["id"] and user["role"] != "admin"):
        raise HTTPException(status_code=403)
    return crud.update_book(db, book_id, book)

@router.delete("/books/{book_id}")
def delete_book(book_id: int, db: Session = Depends(get_db), user=Depends(get_current_user)):
    if user["role"] != "admin":
        raise HTTPException(status_code=403)
    return crud.delete_book(db, book_id)
