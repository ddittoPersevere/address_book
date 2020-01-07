import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = (props) => (
    <nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand lead text-light" href="#">Address Book</a>
            <ul className="navbar-nav mr-0 d-flex flex-row">
                <li className="nav-item mx-3">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item mx-3">
                    <NavLink to="/show">Search Contacts</NavLink>
                </li>
                <li className="nav-item mx-3">
                    <NavLink to="/add">Add a Contact</NavLink>
                </li>
            </ul>
    </nav>
)

export default Header