import React from "react";
import { Link } from 'react-router-dom'
import './navBar.css'

function NavBar() {
    
    return (
        <div className="nav-bar">
            <Link to='/' className="nav-link">Home</Link>
            <Link to='/search' className="nav-link">Search</Link>
            <Link to='/form' className="nav-link">Form</Link>
i       </div>
    )
}

export default NavBar