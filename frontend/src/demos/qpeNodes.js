export default [
  {
    id: "1",
    type: "matrix",
    data: { matrix: "" },
    position: { x: -200, y: 200 },
  },
  {
    id: "2",
    type: "statePrep",
    data: { type: "statePrep" },
    position: { x: 0, y: 200 },
  },
  {
    id: "3",
    type: "qpe",
    data: { error: 0.1 },
    position: { x: 200, y: 100 },
  },
  {
    id: "4",
    type: "measurement",
    data: { type: "probs" },
    position: { x: 400, y: 200 },
  },
  {
    id: "5",
    type: "execute",
    data: { type: "default.qubit", val: null },
    position: { x: 600, y: 200 },
  },
  {
    id: "6",
    type: "measurement",
    data: { type: "state" },
    position: { x: 400, y: 0 },
  },
  {
    id: "8",
    type: "matrix",
    data: { matrix: "" },
    position: { x: -200, y: 0 },
  },
  {
    id: "9",
    type: "trotterProduct",
    data: { order: 2, steps: 10 },
    position: { x: 0, y: 0 },
  },
];
