import React from "react";
import { Handle } from "reactflow";
import { shallow } from "zustand/shallow";
import { tw } from "twind";
import { useStore } from "../store";

const selector = (id) => (store) => ({
  setType: (e) => store.updateNode(id, { type: e.target.value }),
  setLibrary: (e) => store.updateNode(id, { library: e.target.value }),
});

export default function HamiltonianBuilder({ id, data }) {
  const { setType, setLibrary } = useStore(selector(id), shallow);

  return (
    <div className={tw("rounded-md bg-white shadow-xl")}>
      <Handle className={tw("w-2 h-2")} type="target" position="left" />
      <p
        className={tw("rounded-t-md px-2 py-1 bg-pink-500 text-white text-sm")}
      >
        Hamiltonian
      </p>
      <hr className={tw("border-gray-200 mx-2")} />
      <label className={tw("flex flex-col px-2 pt-1 pb-4")}>
        <p className={tw("text-xs font-bold mb-2")}>Basis Set</p>
        <select className="nodrag" value={data.type} onChange={setType}>
          <option value="sto3g">STO3G</option>
          <option value="631g">631G</option>
        </select>
      </label>
      <hr className={tw("border-gray-200 mx-2")} />
      <label className={tw("flex flex-col px-2 pt-1 pb-4")}>
        <p className={tw("text-xs font-bold mb-2")}>Library</p>
        <select className="nodrag" value={data.library} onChange={setLibrary}>
          <option value="pyscf">PYSCF</option>
          <option value="openfermion">OpenFermion</option>
        </select>
      </label>

      <Handle className={tw("w-2 h-2")} type="source" position="right" />
    </div>
  );
}
