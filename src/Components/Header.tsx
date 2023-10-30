import { Link, NavLink,  } from "react-router-dom";
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
                    <NavLink to="/">Logout</NavLink>
                </>
                :
                <>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </>
                }
            </div>
        </nav> 
        
    )
}