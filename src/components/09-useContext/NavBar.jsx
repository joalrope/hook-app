import React from 'react';
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

        <Link className="navbar-brand" to="/">useContext</Link>
       
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink exact activeClassName= "selected" to="/" className="nav-link Active" >Home </NavLink>
                <NavLink exact activeClassName= "selected" to="/login" className="nav-link" >Login</NavLink>
                <NavLink exact activeClassName= "selected" to="/about" className="nav-link" >About</NavLink>
            </div>
        </div>
</nav>
    )
}
