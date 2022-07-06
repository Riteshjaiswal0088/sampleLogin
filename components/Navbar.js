import React from 'react';

import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
            <Link className="navbar-link" to="/">Register</Link>
            <Link className="navbar-link" to="/login">Login</Link>
            <Link className="navbar-link" to="/users">User</Link>
        </div>
    );
};