import React from 'react'
import { Link } from 'react-router-dom'

function Navbar ({navbarID}) {
    return (
        <nav className="nav navbar">
            <Link to="/" className="site-title">LifeTrack</Link>
            <ul>
                <li>
                    <Link to="/login">{navbarID}</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

