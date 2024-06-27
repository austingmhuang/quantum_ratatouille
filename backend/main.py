from flask import request, jsonify
from config import app, db

@app.route("/execute_circuit", methods=["POST"])
def execute_circuit():
    nodes = request.json.get("nodes")
    edges = request.json.get("edges")

    if not nodes or not edges:
        return (
            jsonify({"message": "Where nodes or edges?"}),
            400,
        )

    return jsonify({"val": -1.8}), 200


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)
