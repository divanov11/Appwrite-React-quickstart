import React from "react";
import { useAuth } from "../context/AuthContext";

const LogoutButton = () => {
    const { logoutUser } = useAuth();

    return (
        <button onClick={logoutUser} id="logout-btn">
            Logout
        </button>
    );
};

export default LogoutButton;
