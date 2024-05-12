import { useEffect, useState } from "react";
import { Query } from "appwrite";
import { Navigate } from "react-router-dom";
import db from "../appwrite/databases";
import TodoForm from "../components/TodoForm";
import Note from "../components/Note";
import LogoutButton from "../components/LogoutButton";
import { useAuth } from "../context/AuthContext";
import ThemeOption from "../components/ThemeOption";
import LockIcon from "../assets/LockIcon";

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [pro, setPro] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        setPro(user.labels.includes("premium"));
        const response = await db.notes.list([Query.orderDesc("$createdAt")]);
        setNotes(response.documents);
    };

    return (
        <>
            {/* {pro ? (
                <div id="pro-header">
                    <div className="tag">
                        <span>Pro member</span>
                    </div>
                    <div className="theme-options">
                        <ThemeOption
                            bg="#954ebe"
                            border="#954ebe"
                            theme="purple"
                        />
                        <ThemeOption bg="#fff" border="black" theme="light" />
                        <ThemeOption bg="#000" border="#fff" theme="dark" />
                    </div>
                </div>
            ) : (
                <div id="subscribe-prompt">
                    <LockIcon />
                    <p>Unlock purple mode for $1</p>
                </div>
            )} */}

            <div id="pro-header">
                <div className="tag">
                    <span>Pro member</span>
                </div>
                <div className="theme-options">
                    <ThemeOption bg="#954ebe" border="#954ebe" theme="purple" />
                    <ThemeOption bg="#fff" border="black" theme="light" />
                    <ThemeOption bg="#000" border="#fff" theme="dark" />
                </div>
            </div>
            <div>
                <h1>✍️ My Todo List</h1>
            </div>

            <TodoForm setNotes={setNotes} />

            {notes.map((note) => (
                <Note key={note.$id} noteData={note} setNotes={setNotes} />
            ))}

            <LogoutButton />
        </>
    );
};

export default Notes;
