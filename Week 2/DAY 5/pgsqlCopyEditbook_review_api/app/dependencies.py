# app/dependencies.py
from fastapi import Request, HTTPException

def get_current_user(request: Request):
    if not hasattr(request.state, "user"):
        raise HTTPException(status_code=403, detail="Not authenticated")
    return request.state.user
