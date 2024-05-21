import React from "react";

const ThemeOption = ({ bg, border, theme }) => {
    const changeTheme = (theme) => {
        console.log("Change theme");
        document.getElementById("app").setAttribute("data-theme", theme);
    };

    return (
        <div
            onClick={() => changeTheme(theme)}
            className="theme-option"
            style={{ backgroundColor: bg, borderColor: border }}
        ></div>
    );
};

export default ThemeOption;
