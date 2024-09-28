import { Link, Route, Routes } from "react-router-dom";
import Skills from "./skills";
import Qualification from "./Qualification";

function Dashboard() {
    return (
        <div className="container mt-3">
            <h3>Welcome to your Dashboard</h3>

            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <Link class="nav-link" to="skills">My Skills</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="qualification">Qualification</Link>
                </li>
            </ul>

            <Routes>
                <Route path="skills" element={<Skills />} />
                <Route path="qualification" element={<Qualification />} />
            </Routes>
        </div>
    );
}

export default Dashboard;