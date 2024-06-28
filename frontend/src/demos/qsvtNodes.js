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
    type: "qsvt",
    data: { error: 0.1, poly: "1/x" },
    position: { x: 200, y: 100 },
  },
  {
    id: "4",
    type: "measurement",
    data: { type: "expval" },
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
    type: "matrix",
    data: { matrix: "" },
    position: { x: -200, y: 0 },
  },
];
