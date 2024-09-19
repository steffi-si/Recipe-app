import DarkModeToggle from "./DarkModeToggle.jsx";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/search">Search Meals</Link>
            </li>
            </ul>
            <DarkModeToggle />
        </nav>
    );
}