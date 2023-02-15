
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{

    const initialNote = [
        {
            "_id": "63ec7d30f5d10c116025c189",
            "userId": "63ec7875a884f187d76edc7a",
            "title": "My Bank Details",
            "description": "This is a simple bank details note",
            "tags": "personal",
            "date": "2023-02-15T06:35:28.662Z",
            "__v": 0
        }
    ];


    const [note, setNote] = useState(initialNote);
    

    return (
        <NoteContext.Provider value={{note, setNote}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;