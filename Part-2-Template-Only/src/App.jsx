import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import LoginRegister from "./pages/LoginRegister";

function App() {
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
        document
            .querySelector("body")
            .setAttribute("data-theme", selectedTheme);
    }

    return (
        <div id="app">
            <div id="container">
                <BrowserRouter>
                    <Routes>
                        <Route element={<Notes />} path="/" />
                        <Route element={<LoginRegister />} path="/login" />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
