import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import LoginRegister from "./pages/LoginRegister";

function App() {
    return (
        <div id="app" data-theme="dark">
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
