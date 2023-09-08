from fabric.api import *

env.user = 'ubuntu'

env.hosts = ['54.146.64.168']

def run_server():
    """Run the flask server at the background in the server and do not display
    the output from my end"""
    with hide("output"):
        run("nohup python3 ./models/app.py &", pty=False)
