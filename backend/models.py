# models.py - SQLAlchemy models (Database Tables)
from sqlalchemy import Column, String, DateTime, Integer, Text
from sqlalchemy.sql import func
from database import Base, engine
import uuid

class User(Base):
    __tablename__ = "users"
    
    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    username = Column(String(100), unique=True, nullable=False, index=True)
    email = Column(String(255), unique=True, nullable=False)
    password = Column(String(255), nullable=False)  # Store hashed passwords only!
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())
    
    def to_dict(self):
        """Convert model to dictionary"""
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "created_at": self.created_at.isoformat() if self.created_at else None,
            "updated_at": self.updated_at.isoformat() if self.updated_at else None
        }

# Add more models here for your SmartDealX app
# Example for Tenders:
# class Tender(Base):
#     __tablename__ = "tenders"
#     
#     id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
#     title = Column(String(255), nullable=False)
#     description = Column(Text)
#     budget = Column(Integer)
#     deadline = Column(DateTime)
#     created_at = Column(DateTime, server_default=func.now())