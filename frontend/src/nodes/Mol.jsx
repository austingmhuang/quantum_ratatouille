import React from "react";
import { Handle } from "reactflow";
import { shallow } from "zustand/shallow";
import { tw } from "twind";
import { useStore } from "../store";
import { useDropzone } from "react-dropzone";

export default function Mol({ id, data }) {
  const updateNode = useStore((state) => state.updateNode);
  const { getRootProps, getInputProps } = useDropzone({
    noClick: true,
    maxFiles: 1,
    onDrop: (files) => updateNode(id, files),
  });

  console.log(data[0].path);

  return (
    <div className={tw("rounded-md bg-white shadow-xl")}>
      <p className={tw("rounded-t-md px-2 py-1 bg-blue-500 text-white text-m")}>
        Molecule
      </p>
      <label className={tw("flex flex-col px-2 pt-1 pb-4")}>
        <div
          {...getRootProps({
            className: tw(
              "bg-gray-100 relative border-2 border-gray-300 border-dashed rounded-lg p-4 text-sm",
            ),
          })}
        >
          <input {...getInputProps()} />
          <p>Molecule.xyz</p>
          <aside>
            <p>{data[0].path}</p>
          </aside>
        </div>
      </label>

      <Handle className={tw("w-2 h-2")} type="source" position="right" />
    </div>
  );
}
