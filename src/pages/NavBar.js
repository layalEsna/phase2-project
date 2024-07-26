import React from "react";
import { Link } from 'react-router-dom'
import './navBar.css'


function NavBar() {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to='/' className="nav-link">Home</Link>
            <Link to='/search' className="nav-link">Search</Link>
            <Link to='/form' className="nav-link">Form</Link>
            i       </div>
        </nav>
    )
}

export default NavBar