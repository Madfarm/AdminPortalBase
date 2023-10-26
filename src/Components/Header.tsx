import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import './Header.css';
import { useAuthContext } from "../Context/AuthContext";

export default function Header() {
    const { authData } = useAuthContext();

    return (
        <nav className="Navbar">
            <Link to="/">Home</Link>

            <div className="AuthLinks">
                {authData.token ?
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