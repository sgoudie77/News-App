import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'
import logo from '../../img/GNS-logo.png'
import { Link } from 'react-router-dom';



class Navbar extends Component {
    state = { clicked: false }
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    

    state = { categoryClicked: 'general' }
    
    categoryClick = () => {
        this.setState({ categoryClicked: this.state.categoryClicked })
        console.log('you clicked a link');
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
                            <li key={index}>
                                <a className={item.cName} categoryClicked={this.state.categoryClicked} onClick={this.categoryClick}>
                                    {item.link}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;