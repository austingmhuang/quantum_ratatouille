import React from "react";
import { Handle } from "reactflow";
import { shallow } from "zustand/shallow";
import { tw } from "twind";
import { useStore } from "../store";

const selector = (id) => (store) => ({
  setError: (e) => store.updateNode(id, { error: e.target.value }),
});

export default function TrotterProduct({ id, data }) {
  const { setError } = useStore(selector(id), shallow);

  return (
    <div className={tw("rounded-md bg-white shadow-xl")}>
      <Handle className={tw("w-2 h-2")} type="target" position="left" />
      <p
        className={tw("rounded-t-md px-2 py-1 bg-pink-500 text-white text-sm")}
      >
        TrotterProduct
      </p>
      <label className={tw("flex flex-col px-2 pt-1 pb-4")}>
        <p className={tw("text-xs font-bold mb-2")}>Error</p>
        <input
          className="nodrag"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={data.error}
          onChange={setError}
        />
        <p className={tw("text-right text-xs")}>{data.error}</p>
      </label>

      <Handle className={tw("w-2 h-2")} type="source" position="right" />
    </div>
  );
}
