import { useState, useEffect } from "react";
import DeleteIcon from "../assets/DeleteIcon";
import db from "../appwrite/databases";

const Note = ({ noteData, setNotes }) => {
    const [note, setNote] = useState(noteData);

    useEffect(() => {}, [note]);

    const handleDelete = async () => {
        db.notes.delete(note.$id);
        setNotes((prevState) => prevState.filter((i) => i.$id !== note.$id));
    };

    const handleUpdate = async () => {
        const completed = !note.completed;
        db.notes.update(note.$id, { completed });
        setNote({ ...note, completed: completed });
    };
    return (
        <div className="note-wrapper">
            <span className="note-body" onClick={handleUpdate}>
                {note.completed ? <s>{note.body}</s> : <>{note.body}</>}
            </span>

            <div className="delete" onClick={handleDelete}>
                <DeleteIcon />
            </div>
        </div>
    );
};

export default Note;
