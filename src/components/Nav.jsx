import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Nav() {
    const navigation = [{
        "id": 1,
        "name": "Home",
        "link": "/home"
    },
    {
        "id": 2,
        "name": "List",
        "link": "/list"
    },
    {
        "id": 3,
        "name": "About Us",
        "link": "/about"
    },
    {
        "id": 4,
        "name": "Login",
        "link": "/"
    },
    {
        "id": 5,
        "name": "Registration",
        "link": "/registration"
    }
    ]
    const navs = navigation.map(nav => (
        <li className="nav-item">
            <NavLink className="nav-link" key={nav.id} aria-current="page" to={nav.link}>
                {nav.name}
            </NavLink>
        </li>
    ))
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary-subtle navbar-primary-subtle">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Contact App</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-underline ms-auto mb-2 mb-lg-0">
                            {navs}
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="/crud" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FaRegEdit /> CRUD
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/crud/add">Add</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/crud/update">Update</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="dropdown-item" to="/crud/delete">Delete</NavLink></li>
                                </ul>
                            </li>
                        
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
