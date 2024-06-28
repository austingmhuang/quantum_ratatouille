import os
from config import app, db
from flask import request, jsonify

import pennylane as qml
import matplotlib.pyplot as plt

# from .. import generate_circuit, process_graph


@app.route("/execute_circuit", methods=["POST"])
def execute_circuit():
    nodes = request.json.get("nodes")
    edges = request.json.get("edges")

    if not nodes or not edges:
        return (
            jsonify({"message": "Where nodes or edges?"}),
            400,
        )
    # processed_nodes, get_src_dict, get_tar_dict = process_graph(nodes, edges)
    # c = generate_circuit(processed_nodes, get_src_dict, get_tar_dict)
    c = generate_circuit()

    val = c()

    script_dir = os.path.dirname(__file__)
    rel_path = "circuit_draw_images/result.png"
    abs_file_path = os.path.join(script_dir, rel_path)

    fig, _ = qml.draw_mpl(c)()
    fig.savefig(abs_file_path)

    return jsonify({"val": val}), 200


def generate_circuit(*args, **kwargs):
    @qml.qnode(qml.device("default.qubit"))
    def circ():
        qml.Hadamard(0)
        qml.CNOT([0,1])
        return qml.expval(qml.Z(1))
    
    return circ


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)
