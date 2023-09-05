#!/usr/bin/python3
""" Testing the output of mysql and functionality of my sqlalchemy table"""
from user import User
from __init__ import storage


all_states = storage.all(User)
print("All States: {}".format(len(all_states.keys())))
for state_key in all_states.keys():
    print(all_states[state_key])

message = "Are you a freelancer ?"
new_state = User("Olowosuyi Temitope", "Temitopeabiodun685@gmail.com", message)

storage.new(new_state)
storage.save()
print("New State: {}".format(new_state))

all_states = storage.all(User)
print("All States: {}".format(len(all_states.keys())))
for state_key in all_states.keys():
    print(all_states[state_key])
