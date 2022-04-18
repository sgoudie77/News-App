import React from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';

function NavSearchBtn() {
  
    // const { pathname } = useLocation();
    const location = useLocation();
    // console.log(location)
    
    return (
        <div>
            {location.pathname !== "/SearchPage" && <div className="search-bar-nav-wrapper">
                <Link to="/SearchPage" style={{ textDecoration: 'none' }}>
                    <div className='search-bar-nav'>
                        <i className="fa fa-search"></i>
                        <p>Search GNS</p>
                    </div>
                </Link>
            </div>}
        </div>
  )
}

export default NavSearchBtn