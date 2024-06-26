import { applyNodeChanges, applyEdgeChanges, addEdge } from "reactflow";
import { nanoid } from "nanoid";
import { create } from "zustand";

export const useStore = create((set, get) => ({
  nodes: [
    {
      id: "1",
      type: "mol",
      data: [{ path: "Molecule.xyz" }],
      position: { x: -100, y: 200 },
    },
    {
      id: "2",
      type: "mapper",
      data: { type: "jw" },
      position: { x: -100, y: 400 },
    },
    {
      id: "3",
      type: "measurement",
      data: { type: "expval" },
      position: { x: 200, y: 300 },
    },
    {
      id: "4",
      type: "hamiltonianBuilder",
      data: { type: "sto3g", library: "pyscf" },
      position: { x: 300, y: 300 },
    },
    {
      id: "5",
      type: "execute",
      data: { type: "default.qubit" },
      position: { x: 400, y: 300 },
    },
  ],
  edges: [{ id: "0->1", source: "0", target: "1" }],

  onNodesChange(changes) {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onEdgesChange(changes) {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  updateNode(id, data) {
    set({
      nodes: get().nodes.map((node) =>
        node.id === id
          ? { ...node, data: Object.assign(node.data, data) }
          : node,
      ),
    });
  },

  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },

  setNodes: (nodes) => {
    set({ nodes });
  },
  setEdges: (edges) => {
    set({ edges });
  },

  createNode: (type) => {
    const id = nanoid();
    const data = { frequency: 440, type: "sine" };
    const position = { x: 0, y: 0 };

    set({ nodes: [...get().nodes, { id, type, data, position }] });
  },
}));
