import { useState } from "react";
import NoteForm from "../components/NoteForm";
import Note from "../components/Note";
import ThemeOption from "../components/ThemeOption";
import notes from "../data.json";

function Notes() {
    return (
        <>
            <div>
                <h1>✍️ My Todo List</h1>
            </div>

            <div className="theme-options">
                <ThemeOption theme="dark" />
                <ThemeOption theme="light" />
                <ThemeOption theme="purple" />
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
