import React from "react";

const ThemeOption = ({ theme }) => {
    const setTheme = () => {
        document.querySelector("body").setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    };

    return (
        <div
            className="theme-option"
            id={`theme-${theme}`}
            onClick={setTheme}
        ></div>
    );
};

export default ThemeOption;
