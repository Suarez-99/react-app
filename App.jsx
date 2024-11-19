import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import EditCreate from "./pages/EditCreate";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/edit" element={<EditCreate />} />
            </Routes>
        </Router>
    );
}

export default App;
