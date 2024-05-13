import { useRef } from "react";
import db from "../appwrite/databases";

const NoteForm = ({ setNotes }) => {
    const formRef = useRef(null);

    const handleAdd = async (e) => {
        e.preventDefault();

        const noteBody = formRef.current.body.value;

        if (noteBody === "") return;

        try {
            const payload = {
                body: noteBody,
            };

            const response = await db.notes.create(payload);
            setNotes((prevState) => [response, ...prevState]);

            formRef.current.reset();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form ref={formRef} onSubmit={handleAdd} id="todo-form">
            <input
                name="body"
                type="text"
                placeholder="🤔 What's on the agenda?"
            />
        </form>
    );
};

export default NoteForm;
