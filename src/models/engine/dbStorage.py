"""This class contains our storage and all connection to the database"""
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
from base_model import BaseModel, Base
from user import User

class DBStorage:
    """Create new storage and connect to database"""
    __engine = None
    __session = None

    def __init__(self):
        """Connect to database once an instance of the storage is created"""
        self.__engine = create_engine("mysql+mysqldb://{}:{}@{}/{}".format(
            'root', 'vagrant', '54.146.64.168', 'Portfolio'
        ), pool_pre_ping=True)
      
    def reload(self):
        """Create all tables in database, and session which is used to interact with the database"""
        Base.metadata.create_all(self.__engine)
        session_factory = sessionmaker(bind=self.__engine, expire_on_commit=False)
        Session = scoped_session(session_factory)
        self.__session = Session()

    def all(self, cls=None):
        """Return a dictionary that contains all object of a specified class"""
        dic  = {}
        if cls:
            if isinstance(str, cls):
                cls = eval(cls)
            objects = self.__session.query(cls).all()
            for obj in objects:
                key = "{}.{}".format(obj.__class__.__name__, obj.id)
                dic[key] = obj
        else:
            classes = [User]
            for kls in classes:
                objects = self.__session.query(kls).all()
                if len(objects) > 0:
                    for obj in objects:
                        key = "{}.{}".format(obj.__class__.__name__, obj.id)
                        dic[key] = obj
        return dic

    def new(self, obj):
        """add the object to the current database session"""
        self.__session.add(obj)

    def save(self):
        """Commit all changes to the current database session"""
        self.__session.commit()

    def delete(self, obj=None):
        """Delete from the current database session"""
        if obj:
            self.__session.delete(obj)
        
    def close(self):
        """Remove private session attribute"""
        self.__session.close()
