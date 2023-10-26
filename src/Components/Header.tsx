import { Link } from "react-router-dom";
import { useState } from 'react';
import './Header.css';

export default function Header() {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

    return (
        <nav className="Navbar">
            <Link to="/">Home</Link>

            <div className="AuthLinks">
                {localStorage.getItem("token") ?
                <>
                    <p>Logout</p>
                </>
                :
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
                }
            </div>
        </nav> 
        
    )
}