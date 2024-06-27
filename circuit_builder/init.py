"""
Module with utility functions which construct the circuit 
"""
import pennylane as qml


from .utils import *
from .building_blocks import *


def generate_circuit(nodes, edges):

    for n in nodes: 
        # Extract Device
        if n["type"] == "execute":
            dev_name = n["data"]["type"]
            break 


    return qnode

