import { useState, useEffect } from "react";
import DeleteIcon from "../assets/DeleteIcon";
import db from "../appwrite/databases";

const Note = ({ noteData, setNotes }) => {
    const [note, setNote] = useState(noteData);

    useEffect(() => {}, [note]);

    const handleDelete = async (id) => {
        db.notes.delete(id);
        setNotes((prevState) => prevState.filter((note) => note.$id !== id));
    };

    const handleUpdate = async (id) => {
        console.log("Handle update clicked!");
        const completed = !note.completed;
        db.notes.update(id, { completed });
        setNote({ ...note, completed: completed });
    };

    return (
        <div className="note-wrapper">
            <span
                className="note-body"
                onClick={() => {
                    handleUpdate(note.$id);
                }}
            >
                {note.completed ? <s>{note.body}</s> : <span>{note.body}</span>}
            </span>

            <div className="delete" onClick={() => handleDelete(note.$id)}>
                <DeleteIcon />
            </div>
        </div>
    );
};

export default Note;
