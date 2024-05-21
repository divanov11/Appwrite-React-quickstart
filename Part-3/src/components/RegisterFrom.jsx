import React from "react";

const RegisterFrom = ({ setActiveForm }) => {
    return (
        <div>
            <h1>Register</h1>
            <form>
                <div className="auth-field-wrapper">
                    <label>Name:</label>
                    <input type="text" name="name" />
                </div>

                <div className="auth-field-wrapper">
                    <label>Email:</label>
                    <input type="email" name="email" />
                </div>

                <div className="auth-field-wrapper">
                    <label>Password:</label>
                    <input type="password" name="password" />
                </div>

                <div className="auth-field-wrapper">
                    <input type="submit" value="Signup" />
                </div>
            </form>

            <p>
                Already have an account?{" "}
                <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                    onClick={() => {
                        setActiveForm("login");
                    }}
                >
                    Login
                </span>
            </p>
        </div>
    );
};

export default RegisterFrom;
