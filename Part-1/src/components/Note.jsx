import { useState } from "react";
import db from "../appwrite/databases";
import DeleteIcon from "../assets/DeleteIcon";

function Note({ setNotes, noteData }) {
    const [note, setNote] = useState(noteData);

    const handleUpdate = async () => {
        const completed = !note.completed;
        db.notes.update(note.$id, { completed });
        setNote({ ...note, completed: completed });
    };

    const handleDelete = async () => {
        db.notes.delete(note.$id);
        setNotes((prevState) => prevState.filter((i) => i.$id !== note.$id));
    };

    return (
        <div className="note-wrapper">
            <span className="note-body" onClick={handleUpdate}>
                {note.completed ? <s>{note.body}</s> : <>{note.body}</>}
            </span>

            <div onClick={handleDelete}>
                <DeleteIcon />
            </div>
        </div>
    );
}

export default Note;
