import pennylane as qml

# Vector node:
# def get_vector(node)

# State Preperation: 
#  (1) Input Node [Optional] --> Mottonen(state-vector) --> (1) SV register

# Select: 
#  (1) Input Ctrl Node, (2) Input Select Nodes [Optional] --> Select(List[Unitaries]) --> (1) Ctrl measurement register, (2) selection register

# QROM: 
#  (1) Input Index Node, (2) Input Bitstring Node [Optional] --> QROM(List[Bitstrings]) --> (1) Index prep register, (2) Bitstring register
#   optimize depth vs width, clean vs dirt work qubits

# QSVT: 
#  (1) Input BlockEncode Node [Optional] --> QSVT(A, poly, error) --> (1) BlockEncoded Subspace register, 

# QPE: 
#  (1) Input EigState Node --> QPE(U, error) -->  (1) Measurement Register, (2) Eigenstate Register

# def get_qpe(U_node, psi_node, error):



# Reflection: 
#  (1) Input Subspace Node --> Reflection(U, angle=pi) --> (1) Reflected over subspace register


# Identity:
#  (1) Input Node [Optional] --> Identity(dim) --> ()