# main.py - Main FastAPI application
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from datetime import datetime
import uvicorn
import os
from pathlib import Path
from contextlib import asynccontextmanager

from database import init_db, get_db
from routes import router
from models import Base, engine

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Initialize database
    print(f"{datetime.now().strftime('%I:%M:%S %p')} [fastapi] Initializing database...")
    init_db()
    yield
    # Shutdown: cleanup if needed
    print(f"{datetime.now().strftime('%I:%M:%S %p')} [fastapi] Shutting down...")

app = FastAPI(lifespan=lifespan)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Logging middleware
@app.middleware("http")
async def log_requests(request: Request, call_next):
    start_time = datetime.now()
    response = await call_next(request)
    duration = (datetime.now() - start_time).total_seconds() * 1000
    
    if request.url.path.startswith("/api"):
        formatted_time = datetime.now().strftime("%I:%M:%S %p")
        print(f"{formatted_time} [fastapi] {request.method} {request.url.path} {response.status_code} in {duration:.0f}ms")
    
    return response

# Register API routes with /api prefix
app.include_router(router, prefix="/api")

# Serve static files in production
if os.getenv("ENV") == "production":
    dist_path = Path(__file__).parent.parent / "public"
    if dist_path.exists():
        app.mount("/assets", StaticFiles(directory=dist_path / "assets"), name="assets")
        
        @app.get("/{full_path:path}")
        async def serve_frontend(full_path: str):
            file_path = dist_path / full_path
            if file_path.exists() and file_path.is_file():
                return FileResponse(file_path)
            return FileResponse(dist_path / "index.html")
    else:
        print(f"Warning: Build directory not found at {dist_path}")

if __name__ == "__main__":
    port = int(os.getenv("PORT", "3000"))
    formatted_time = datetime.now().strftime("%I:%M:%S %p")
    print(f"{formatted_time} [fastapi] serving on port {port}")
    
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=port,
        reload=True if os.getenv("ENV") != "production" else False
    )