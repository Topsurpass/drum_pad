"""This module contains all our classes include other module engine for our storage"""
from user import User
from flask import Blueprint
from engine.dbStorage import DBStorage

"""Create an instance of the storage"""
storage = DBStorage()
"""Connect to database, create tables anf make session available"""
storage.reload()


