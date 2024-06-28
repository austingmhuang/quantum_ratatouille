import os
from config import app, db
from flask import request, jsonify

import pennylane as qml
import matplotlib.pyplot as plt

from utils import process_graph
from circuit_builder import generate_circuit


@app.route("/execute_circuit", methods=["POST"])
def execute_circuit():
    nodes = request.json.get("nodes")
    edges = request.json.get("edges")

    if not nodes or not edges:
        return (
            jsonify({"message": "Where nodes or edges?"}),
            400,
        )
    processed_nodes, get_src_dict, get_tar_dict = process_graph(nodes, edges)

    print(processed_nodes)

    c = generate_circuit(processed_nodes, get_src_dict, get_tar_dict)
    val = c()

    script_dir = os.path.dirname(__file__)
    rel_path = "circuit_draw_images/result.png"
    abs_file_path = os.path.join(script_dir, rel_path)

    fig, _ = qml.draw_mpl(c)()
    fig.savefig(abs_file_path)
    plt.close(fig)

    return jsonify({"val": val}), 200


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)
