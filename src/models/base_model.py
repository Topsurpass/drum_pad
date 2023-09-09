#!/usr/bin/python3
"""This class contains the base class for all other classes i.e other classes
inherit from the base class"""

import uuid
from datetime import datetime
from sqlalchemy import Column, String, DateTime
from sqlalchemy.orm import declarative_base
import __init__

Base = declarative_base()
time = "%Y-%m-%dT%H:%M:%S.%f"

class BaseModel:
    """create a base class for declarative class definitions"""
    id = Column(String(60), unique=True, nullable=False, primary_key=True)
    sent_at = Column(DateTime, nullable=False, default=datetime.utcnow())

    def __init__(self, *args):
        """Initialize class"""
        self.id = str(uuid.uuid4())
        self.sent_at = datetime.now()

    def __str__(self):
        """Get object class and returns a string representation of the object"""
        new_dict = {}
        cls = (str(type(self)).split('.')[-1]).split('\'')[0]
        for obj in self.__dict__:
            if '_sa_instance_state' != obj:
                new_dict[obj] = self.__dict__[obj]
        return '[{}] ({}) {}'.format(cls, self.id, new_dict)

    def to_dict(self):
        """convert date key in instance to string and return dictionary of obj"""
        new_dict = self.__dict__.copy()
        if "sent_at" in new_dict:
            new_dict["sent_at"] = new_dict["sent_at"].strftime(time)
        new_dict["__class__"] = self.__class__.__name__
        if "_sa_instance_state" in new_dict:
            del new_dict["_sa_instance_state"]
        return new_dict

    def save(self):
        """Save new object created"""
        __init__.storage.new(self)
        __init__.storage.save()

    def delete(self):
        """delete cureent obj from the storage"""
        __init__.storage.delete(self)