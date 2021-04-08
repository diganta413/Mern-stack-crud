import React from 'react'
import {Link} from "react-router-dom";
import "../styles/Navbar.css"
import {useHistory} from "react-router-dom";

function Navbar() {

    return (
        <div className="navbar"> 
            <Link className="link" to="/createlist">Create Item</Link>
            <Link className="link" to="/">List</Link>
        </div>
    )
}

export default Navbar;