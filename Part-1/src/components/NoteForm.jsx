import React from "react";
import db from "../appwrite/databases";

function NoteForm({ setNotes }) {
    const handleAdd = async (e) => {
        e.preventDefault();
        const noteBody = e.target.body.value;

        if (noteBody === "") return;

        try {
            const payload = { body: noteBody };

            const response = await db.notes.create(payload);
            setNotes((prevState) => [response, ...prevState]);

            e.target.reset();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleAdd} id="todo-form">
            <input
                type="text"
                name="body"
                placeholder="🤔 What's on the agenda?"
            />
        </form>
    );
}

export default NoteForm;
