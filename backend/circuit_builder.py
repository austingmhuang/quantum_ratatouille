import pennylane as qml
from pennylane import numpy as np

def generate_circuit(nodes, *args, **kwargs):
    """Main function which generates the circuit from a 
    set of nodes and edges

    Returns:
        QNode: The quantum circuit to be executed.
    """

    # Extract Device
    dev_name = (nodes["5"])["data"]["type"]  # execute node 5
    
    operations = [] 
    measurements = [] 

    mat1 = np.array(nodes["1"]["data"][0]["matrix"])  # top-left matrix node 1 
    mat2 = np.array(nodes["8"]["data"][0]["matrix"])  # bottom-left matrix node 8

    # State Prep: 
    sp_op, sp_w = get_state_prep(mat2)  # state prep node 9
    operations.append(sp_op)

    # Trotter product: 
    order = nodes["2"]["data"]["order"]
    num_steps = nodes["2"]["data"]["num_steps"]  # trotter node 2

    tp_op, tp_w = get_tp(mat1, order, num_steps)

    w_map = dict(zip(tp_w, sp_w))
    qml.map_wires(tp_op, w_map)
    operations.append(tp_op)

    # QPE: 
    error = nodes["3"]["data"]["error"]  # qpe node 3
    qpe_op, qpe_w = get_qpe(tp_op, error)
    operations.append(qpe_op)

    # Probs: 
    measurements.append(qml.probs(qpe_w)) # measurement node 4
    
    # State:
    measurements.append(qml.state())  # measurement node 6


    @qml.qnode(qml.device(dev_name))
    def circuit(operations, measurements):
        for op_or_measure in operations + measurements: 
            qml.apply(op_or_measure)

        return tuple(measurements)

    return circuit


# TrotterProduct:

def get_tp(A, order, num_steps):
    required_wires = int(np.log2(len(A)))
    wl = ["tp{}".format(i) for i in range(required_wires)]
    H = qml.pauli_decompose(A, wire_order=wl)

    return qml.TrotterProduct(H, time=1, order=order, n=num_steps), wl

# State Preperation: 
#  (1) Input Node [Optional] --> Mottonen(state-vector) --> (1) SV register

def get_state_prep(state_vector):
    required_wires = np.ceil(np.log2(len(state_vector)))
    wl = ["s{}".format(i) for i in range(required_wires)]
    return qml.StatePrep(state_vector, wires=wl), wl

# Select: 
#  (1) Input Ctrl Node, (2) Input Select Nodes [Optional] --> Select(List[Unitaries]) --> (1) Ctrl measurement register, (2) selection register

# QROM: 
#  (1) Input Index Node, (2) Input Bitstring Node [Optional] --> QROM(List[Bitstrings]) --> (1) Index prep register, (2) Bitstring register
#   optimize depth vs width, clean vs dirt work qubits

# QSVT: 
#  (1) Input BlockEncode Node [Optional] --> QSVT(A, poly, error) --> (1) BlockEncoded Subspace register, 

# QPE: 
#  (1) Input EigState Node --> QPE(U, error) -->  (1) Measurement Register, (2) Eigenstate Register

def get_qpe(op, error):
    estimate_wires = np.ceil(-1 * np.log2(error))
    wl = ["qpe_w{}".format(i) for i in range(estimate_wires)]
    return qml.QuantumPhaseEstimation(op, estimation_wires=wl), wl

# def get_qpe(U_node, psi_node, error):

# Reflection: 
#  (1) Input Subspace Node --> Reflection(U, angle=pi) --> (1) Reflected over subspace register


# Identity:
#  (1) Input Node [Optional] --> Identity(dim) --> ()