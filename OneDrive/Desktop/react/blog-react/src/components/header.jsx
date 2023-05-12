import React from "react";
import {NavLink} from "react-router-dom";
import './header.css';

function Header() {
    return (
        <nav className="header">
        <NavLink exact activeClassName="active" to="/">
        Home
        </NavLink>
        <NavLink exact activeClassName="active" to="/users">
        Users
        </NavLink>
        <NavLink exact activeClassName="active" to="/contact">
        Contact
        </NavLink>
        </nav>
    )
}

export default Header;