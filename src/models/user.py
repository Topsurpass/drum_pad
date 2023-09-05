#!/usr/bin/python3
"""This module contains user class that submits a form"""

from base_model import BaseModel, Base
from sqlalchemy import Column, String, DateTime


class User(BaseModel, Base):
    """This creates a table called users in the database"""
    __tablename__ = "users"
    name = Column(String(128), nullable=False)
    email = Column(String(128), nullable=False)
    message = Column(String(400), nullable=False)

    def __init__(self, name, email, message):
        """Initialize the instance of the class"""
        super().__init__()
        self.name = name
        self.email = email
        self.message = message

    def __str__(self):
        """Get object class and returns a string representation of the object"""
        new_dict = {}
        cls = (str(type(self)).split('.')[-1]).split('\'')[0]
        for obj in self.__dict__:
            if '_sa_instance_state' != obj:
                new_dict[obj] = self.__dict__[obj]
        return '[{}] ({}) {}'.format(cls, self.id, new_dict)
