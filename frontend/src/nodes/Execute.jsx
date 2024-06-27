import React from "react";
import { Handle } from "reactflow";
import { shallow } from "zustand/shallow";
import { tw } from "twind";
import { useStore } from "../store";

const selector = (id) => (store) => ({
  setType: (e) => store.updateNode(id, { type: e.target.value }),
  setValue: (e) => store.updateNode(id, { val: e }),
});

export default function Execute({ id, data }) {
  const { setType, setValue } = useStore(selector(id), shallow);
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nodes,
      edges,
    };

    const url = "http://127.0.0.1:5000/" + "execute_circuit";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    if (response.status !== 200) {
      const data = await response.json();
      alert(data.message);
    } else {
      const data = await response.json();
      console.log(data.val);
      setValue(data.val);
    }
  };

  return (
    <div className={tw("rounded-md bg-white shadow-xl")}>
      <Handle className={tw("w-2 h-2")} type="target" position="left" />
      <p
        className={tw("rounded-t-md px-2 py-1 bg-green-500 text-white text-sm")}
      >
        Execute
      </p>
      <label className={tw("flex flex-col px-2 pt-1 pb-4")}>
        <p className={tw("text-xs font-bold mb-2")}>Device</p>
        <select className="nodrag" value={data.type} onChange={setType}>
          <option value="default.qubit">Default Qubit</option>
          <option value="real.hardware">Real Hardware</option>
        </select>
      </label>
      <hr className={tw("border-gray-200 mx-2")} />
      <label className={tw("flex flex-col px-2 pt-1 pb-4")}>
        <button
          className={tw(
            "h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 bg-green-500 text-white",
          )}
          onClick={onSubmit}
        >
          Run my circuit
        </button>
      </label>
      <label className={tw("flex flex-col px-2 pt-1 pb-4")}>
        <p className={tw("text-xs")}>{data.val}</p>
      </label>
      <hr className={tw("border-gray-200 mx-2")} />
    </div>
  );
}
