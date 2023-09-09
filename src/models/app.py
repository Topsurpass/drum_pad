#!/usr/bin/python3
"""This module contains the Post api endpoint needed to connect with the fronend form"""
from flask_cors import CORS
from flask import Flask, jsonify, make_response, request
from __init__ import storage
from user import User

app = Flask(__name__)
CORS(app, origin="0.0.0.0")

@app.teardown_appcontext
def tear_down(self):
    """Close storage after each session"""
    storage.close()

@app.errorhandler(404)
def handle_404_err(err):
    """If resource cannot be found, return error 404 json format"""
    return make_response(jsonify({'error': "Not found"}), 404)

@app.route('/api/v1/', methods=['GET'], strict_slashes=False)
def getUser():
    """Get all users in database"""
    users = [us.to_dict() for us in storage.all(User).values()]
    return jsonify(users)

@app.route('/api/v1', methods=['POST'], strict_slashes=False)
def postUser():
    """Post new data to the database"""
    if not request.get_json():
        return jsonify({'error': "Wrong format, not a json format"})
    elif 'name' and 'email' and 'message' not in request.get_json():
        return jsonify({'error': 'Fill name, email and message attributes'})
    else:
        post_data = request.get_json()
        obj_data = User(**post_data)
        obj_data.save()
        return jsonify("Your message has been sent successfully.")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(5000), threaded=True)