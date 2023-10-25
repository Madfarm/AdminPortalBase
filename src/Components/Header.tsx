import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="Navbar">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </nav>
    )
}