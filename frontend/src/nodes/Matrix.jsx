import React, { useState, useRef, useCallback } from "react";
import { Handle } from "reactflow";
import { shallow } from "zustand/shallow";
import { tw } from "twind";
import { useStore } from "../store";

const selector = (id) => (store) => ({
  setMatrix: (e) => store.updateNode(id, { matrix: e.target.value }),
});

export default function Matrix({ id, data }) {
  const { setMatrix } = useStore(selector(id), shallow);

  return (
    <div className={tw("rounded-md bg-white shadow-xl")}>
      <p className={tw("rounded-t-md px-2 py-1 bg-blue-500 text-white text-m")}>
        Matrix
      </p>
      <div className={tw("flex flex-col px-2 pt-1 pb-4")}>
        <input
          className="nodrag"
          placeholder={"Paste your matrix here..."}
          style={{ padding: "10px", fontSize: "20px" }}
          value={data.matrix}
          onChange={setMatrix}
        />
      </div>

      <Handle className={tw("w-2 h-2")} type="source" position="right" />
    </div>
  );
}
