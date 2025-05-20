# app/reviews.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from . import schemas, crud
from .database import get_db
from .dependencies import get_current_user

router = APIRouter()

@router.post("/books/{book_id}/review")
def add_review(book_id: int, review: schemas.ReviewCreate, db: Session = Depends(get_db), user=Depends(get_current_user)):
    return crud.add_review(db, book_id, review, user["id"])

@router.get("/books/{book_id}/reviews")
def get_reviews(book_id: int, db: Session = Depends(get_db)):
    return crud.get_reviews(db, book_id)
