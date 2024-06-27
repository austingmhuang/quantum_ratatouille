import React from "react";
import ReactFlow, {
  ReactFlowProvider,
  Background,
  Panel,
  useReactFlow,
} from "reactflow";
import { shallow } from "zustand/shallow";
import { useStore } from "./store";
import { tw } from "twind";
import Osc from "./nodes/Osc";
import Amp from "./nodes/Amp";
import Mol from "./nodes/Mol";
import Mapper from "./nodes/Mapper";
import Measurement from "./nodes/Measurement";
import HamiltonianBuilder from "./nodes/HamiltonianBuilder";
import Execute from "./nodes/Execute";
import Matrix from "./nodes/Matrix";
import StatePrep from "./nodes/StatePrep";
import QPE from "./nodes/QPE";

import "reactflow/dist/style.css";

const nodeTypes = {
  osc: Osc,
  amp: Amp,
  mol: Mol,
  mapper: Mapper,
  measurement: Measurement,
  hamiltonianBuilder: HamiltonianBuilder,
  execute: Execute,
  matrix: Matrix,
  qpe: QPE,
  statePrep: StatePrep,
};

const selector = (store) => ({
  nodes: store.nodes,
  edges: store.edges,
  onNodesChange: store.onNodesChange,
  onEdgesChange: store.onEdgesChange,
  onConnect: store.onConnect,
  addOsc: () => store.createNode("osc"),
  addAmp: () => store.createNode("amp"),
});

export default function App() {
  const store = useStore(selector, shallow);
  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      nodes={store.nodes}
      edges={store.edges}
      onNodesChange={store.onNodesChange}
      onEdgesChange={store.onEdgesChange}
      onConnect={store.onConnect}
      fitView
    >
      <Panel className={tw("space-x-4")} position="top-right">
        <button
          className={tw("px-2 py-1 rounded bg-white shadow")}
          onClick={store.addOsc}
        >
          Add
        </button>
        <button
          className={tw("px-2 py-1 rounded bg-white shadow")}
          onClick={store.addAmp}
        >
          Add Node
        </button>
      </Panel>
      <Background />
    </ReactFlow>
  );
}
