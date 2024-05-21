import NoteForm from "../components/NoteForm";
import Note from "../components/Note";
import notes from "../data.json";

function Notes() {
    return (
        <>
            <div>
                <h1>✍️ My Todo List</h1>
            </div>

            <NoteForm />

            <div>
                {notes.map((note) => (
                    <Note key={note.$id} noteData={note} />
                ))}
            </div>
        </>
    );
}

export default Notes;
