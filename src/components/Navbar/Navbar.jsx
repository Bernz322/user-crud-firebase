import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[1];

    return (
        <nav>
            <ul id="nav-list">
                <NavLink className={(navData) => (navData.isActive ? 'nav-link-active' : '')} to="/add-user">
                    <li>Add User</li>
                </NavLink>
                <NavLink className={(navData) => (navData.isActive && path !== 'add-user' ? 'nav-link-active' : '')} to="/">
                    <li>Manage Users</li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;