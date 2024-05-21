import React from "react";

function NoteForm() {
    return (
        <form id="todo-form">
            <input
                disabled
                type="text"
                name="body"
                placeholder="🤔 What's on the agenda?"
            />
        </form>
    );
}

export default NoteForm;
