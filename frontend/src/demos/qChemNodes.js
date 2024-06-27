export default [
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
];
