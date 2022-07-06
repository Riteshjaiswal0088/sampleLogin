import React from 'react';

import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-link" to="/">Register</Link>
            <Link className="navbar-link" to="/login">Login</Link>
            <Link className="navbar-link" to="/users">User</Link>
        </div>
        </nav>
    );
};
export default Navbar; 