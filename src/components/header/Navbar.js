import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'
import logo from '../../img/GNS-logo.png'
import { Link } from 'react-router-dom';
import NavSearchBtn from './NavSearchBtn';

// const loc = window.location.pathname
// console.log(loc)
console.log(window.location.pathname)

class Navbar extends Component {
        state = { clicked: false }
        
        handleClick = () => {
            this.setState({ clicked: !this.state.clicked })
        }

        closeMenu = () => {
            this.setState({ clicked: false })
        }


        render(){
        return(
            <nav className="NavbarItems">
                <div className="logo">
                    <Link to='/'>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} onClick={() => this.props.categoryClick(item.link)}>
                                <Link to='/' style={{ textDecoration: 'none' }}>
                                    <a className={item.cName} onClick={this.closeMenu}>
                                        {item.link}
                                    </a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                
                {/* <div className="search-bar-nav-wrapper">
                    <Link to="/SearchPage" style={{ textDecoration: 'none' }}>
                        <div className='search-bar-nav'>
                            <i className="fa fa-search"></i>
                            <p>Search GNS</p>
                        </div>
                    </Link>
                </div> */}
                <NavSearchBtn />
                
            </nav>
        )
    }
}

export default Navbar;