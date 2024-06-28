import React from "react";
import { Handle } from "reactflow";
import { shallow } from "zustand/shallow";
import { tw } from "twind";
import { useStore } from "../store";

const selector = (id) => (store) => ({
  setOrder: (e) => store.updateNode(id, { order: e.target.value }),
  setSteps: (e) => store.updateNode(id, { steps: e.target.value }),
});

export default function TrotterProduct({ id, data }) {
  const { setSteps, setOrder } = useStore(selector(id), shallow);

  return (
    <div className={tw("rounded-md bg-white shadow-xl")}>
      <Handle className={tw("w-2 h-2")} type="target" position="left" />
      <p
        className={tw("rounded-t-md px-2 py-1 bg-pink-500 text-white text-sm")}
      >
        TrotterProduct
      </p>
      <label className={tw("flex flex-col px-2 pt-1 pb-4")}>
        <p className={tw("text-xs font-bold mb-2")}>Steps</p>
        <input
          className="nodrag"
          type="range"
          min="0"
          max="100"
          step="1"
          value={data.steps}
          onChange={setSteps}
        />
        <p className={tw("text-right text-xs")}>{data.steps}</p>
      </label>
      <hr className={tw("border-gray-200 mx-2")} />
      <label className={tw("flex flex-col px-2 pt-1 pb-4")}>
        <p className={tw("text-xs font-bold mb-2")}>Order</p>
        <input
          className="nodrag"
          type="range"
          min="2"
          max="6"
          step="2"
          value={data.order}
          onChange={setOrder}
        />
        <p className={tw("text-right text-xs")}>{data.order}</p>
      </label>

      <Handle className={tw("w-2 h-2")} type="source" position="right" />
    </div>
  );
}
