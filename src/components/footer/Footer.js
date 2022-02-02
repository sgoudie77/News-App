import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <div className="footer-links">
                <ul>
                    <Link to="/About"><li>About</li></Link>
                    <Link to="/Contact"><li>Contact</li></Link>
                    <li>&#169;Get-Coding 2021</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;