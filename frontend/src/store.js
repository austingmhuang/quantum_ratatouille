import { applyNodeChanges, applyEdgeChanges, addEdge } from "reactflow";
import { nanoid } from "nanoid";
import { create } from "zustand";

export const useStore = create((set, get) => ({
  nodes: [
    {
      id: "osc",
      type: "osc",
      data: { frequency: 220, type: "square" },
      position: { x: 0, y: -100 },
    },
    {
      id: "amp",
      type: "amp",
      data: { gain: 0.5 },
      position: { x: -100, y: 100 },
    },
  ],
  edges: [{ id: "osc->amp", source: "osc", target: "amp" }],

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

  // updateNode(id, data) {
  //   set({
  //     nodes: get().nodes.map((node) =>
  //       node.id === id
  //         ? { ...node, data: Object.assign(node.data, data) }
  //         : node,
  //     ),
  //   });
  // },

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
}));
