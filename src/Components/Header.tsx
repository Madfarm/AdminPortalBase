import { Link } from "react-router-dom";
import './Header.css';

export default function Header() {
    return (
        <nav className="Navbar">
            <Link to="/">Home</Link>
            
            <div className="AuthLinks">
                <Link to="/login">Login</Link>

            </div>
        </nav>
    )
}