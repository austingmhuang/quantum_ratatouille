import { applyNodeChanges, applyEdgeChanges, addEdge } from "reactflow";
import { nanoid } from "nanoid";
import { create } from "zustand";

import demoNodes from "./demos/qsvtNodes";
import demoEdges from "./demos/qsvtEdges";

export const useStore = create((set, get) => ({
  nodes: demoNodes,
  edges: demoEdges,

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
