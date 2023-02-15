import React, { useContext} from 'react'

import noteContext from "../context/notes/noteContext";
import Noteitem from './Noteitem';


export default function Note() {
  const context = useContext(noteContext);
  const { note, setNote } = context;
  return (
    <div className="container">
        <h1 className="text-2xl font-semibold">Your Notes</h1>
        {note.map((note) => {
          return <Noteitem note={note} />;
        })}
      </div>
  );
}
