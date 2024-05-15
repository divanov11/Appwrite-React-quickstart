import db from "../appwrite/databases";

const NoteForm = ({ setNotes }) => {
    const handleAdd = async (e) => {
        e.preventDefault();
        const noteBody = e.target.body.value;
        if (noteBody === "") return;

        try {
            const payload = {
                body: noteBody,
            };

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
                name="body"
                type="text"
                placeholder="🤔 What's on the agenda?"
            />
        </form>
    );
};

export default NoteForm;
