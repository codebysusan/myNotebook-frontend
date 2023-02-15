import React, { useContext } from "react";

import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

export default function Note() {
  const context = useContext(noteContext);
  const { note, setNote } = context;
  return (
    <div className="container">
      <h1 className="text-2xl my-4 font-semibold">Your Notes</h1>
      <div className="grid grid-cols-4 gap-4">
        {note.map((note) => {
          return <Noteitem note={note} />;
        })}
      </div>
    </div>
  );
}
