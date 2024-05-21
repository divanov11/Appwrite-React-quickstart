import { useEffect, useState } from "react";
import db from "../appwrite/databases";
import NoteForm from "../components/NoteForm";
import { Query } from "appwrite";
import Note from "../components/Note";

function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        const response = await db.notes.list([Query.orderDesc("$createdAt")]);
        setNotes(response.documents);
    };

    return (
        <>
            <div>
                <h1>✍️ My Todo List</h1>
            </div>

            <NoteForm setNotes={setNotes} />

            <div>
                {notes.map((note) => (
                    <Note key={note.$id} setNotes={setNotes} noteData={note} />
                ))}
            </div>
        </>
    );
}

export default Notes;
