export default [
  { id: "1->2", source: "1", target: "2" },
  { id: "2->3", source: "2", target: "3", targetHandle: "bot" },
  { id: "3->4", source: "3", target: "4", sourceHandle: "bot" },
  { id: "4->5", source: "4", target: "5" },
  { id: "8->9", source: "8", target: "9" },
  { id: "9->3", source: "9", target: "3", targetHandle: "top" },
  { id: "3->6", source: "3", target: "6", sourceHandle: "top" },
  { id: "6->7", source: "6", target: "7" },
];
