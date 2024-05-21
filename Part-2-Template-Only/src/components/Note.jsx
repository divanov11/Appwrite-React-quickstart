import { useState } from "react";
import DeleteIcon from "../assets/DeleteIcon";

function Note({ noteData }) {
    const [note, setNote] = useState(noteData);

    return (
        <div className="note-wrapper">
            <span className="note-body">
                {note.completed ? <s>{note.body}</s> : <>{note.body}</>}
            </span>

            <div>
                <DeleteIcon />
            </div>
        </div>
    );
}

export default Note;
