import React from "react";
import { Handle } from "reactflow";
import { shallow } from "zustand/shallow";
import { tw } from "twind";
import { useStore } from "../store";

const selector = (id) => (store) => ({
  setType: (e) => store.updateNode(id, { type: e.target.value }),
});

export default function Measurement({ id, data }) {
  const { setType } = useStore(selector(id), shallow);

  return (
    <div className={tw("rounded-md bg-white shadow-xl")}>
      <Handle className={tw("w-2 h-2")} type="target" position="left" />
      <p
        className={tw("rounded-t-md px-2 py-1 bg-pink-500 text-white text-sm")}
      >
        Measurement
      </p>
      <hr className={tw("border-gray-200 mx-2")} />
      <label className={tw("flex flex-col px-2 pt-1 pb-4")}>
        <p className={tw("text-xs font-bold mb-2")}>Measurement</p>
        <select className="nodrag" value={data.type} onChange={setType}>
          <option value="expval">Expectation Value</option>
          <option value="counts">Counts</option>
        </select>
      </label>

      <Handle className={tw("w-2 h-2")} type="source" position="right" />
    </div>
  );
}
