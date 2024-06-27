import { applyNodeChanges, applyEdgeChanges, addEdge } from "reactflow";
import { nanoid } from "nanoid";
import { create } from "zustand";

export const useStore = create((set, get) => ({
  nodes: [
    {
      id: "1",
      type: "mol",
      data: [{ path: "Molecule.xyz" }],
      position: { x: -200, y: 200 },
    },
    {
      id: "3",
      type: "mapper",
      data: { type: "jw" },
      position: { x: 200, y: 200 },
    },
    {
      id: "4",
      type: "measurement",
      data: { type: "expval" },
      position: { x: 400, y: 200 },
    },
    {
      id: "2",
      type: "hamiltonianBuilder",
      data: { type: "sto3g", library: "pyscf" },
      position: { x: 0, y: 200 },
    },
    {
      id: "5",
      type: "execute",
      data: { type: "default.qubit", val: null },
      position: { x: 600, y: 200 },
    },
    {
      id: "6",
      type: "matrix",
      data: {
        matrix: [
          [-1, 3],
          [2, 4],
        ],
      },
      position: { x: 800, y: 200 },
    },
    {
      id: "7",
      type: "qpe",
      data: { type: "super qpe" },
      position: { x: 1000, y: 200 },
    },
  ],
  edges: [
    { id: "1->2", source: "1", target: "2" },
    { id: "2->3", source: "2", target: "3" },
    { id: "3->4", source: "3", target: "4" },
    { id: "4->5", source: "4", target: "5" },
    { id: "6->7top", source: "6", target: "7", targetHandle: "top" },
    { id: "dontduplicate", source: "6", target: "7", targetHandle: "bot" },
    { id: "7->5top", source: "7", target: "5", sourceHandle: "top" },
    { id: "no one cares", source: "7", target: "5", sourceHandle: "bot" },
  ],

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
