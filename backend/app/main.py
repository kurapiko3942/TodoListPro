from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class LoginRequest(BaseModel):
    email: str
    password: str

@app.post("/login")
async def login(request: LoginRequest):
    if request.email == "test@example.com" and request.password == "password":
        return {"message": "ログイン成功"}
    else:
        raise HTTPException(status_code=400, detail="メールアドレスまたはパスワードが間違っています")

@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}
