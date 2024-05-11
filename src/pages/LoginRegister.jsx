import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginForm from "../components/LoginForm";
import RegisterFrom from "../components/RegisterFrom";

const LoginRegister = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [activeForm, setActiveForm] = useState("login");

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    });

    return activeForm === "login" ? (
        <LoginForm setActiveForm={setActiveForm} />
    ) : (
        <RegisterFrom setActiveForm={setActiveForm} />
    );
};
export default LoginRegister;
