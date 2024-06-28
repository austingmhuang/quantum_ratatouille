"""
Module with utility functions which construct the circuit 
"""
import pennylane as qml

from .utils import *
from .building_blocks import *


def generate_circuit(nodes, *args, **kwargs):
    """Main function which generates the circuit from a 
    set of nodes and edges

    Returns:
        QNode: The quantum circuit to be executed.
    """

    for n in nodes: 
        # Extract Device
        if n["type"] == "execute":
            dev_name = n["data"]["type"]
            break 

    @qml.qnode(qml.device(dev_name))
    def temp_circuit():
        qml.H(0)
        qml.CNOT(0, 1)
        
        return qml.expval(qml.Z(1))

    return temp_circuit

