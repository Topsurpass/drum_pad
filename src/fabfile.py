#from fabric.api import run, local, sudo
from fabric.api import *

env.user = 'ubuntu'

env.hosts = ['54.146.64.168']

#copy folder to remote current working directory
def push_files():
    put("../build", "./")
