import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
import  { useContext } from "react";
import OptionsContext from '../../../contexts/OptionsContext';
import AccessibilityContext from '../../../contexts/AccessibilityContext';

import hamburgerMenu from '../../../assets/extras/hamburger-menu.svg'

const Navbar = ( ) => {
    const { handleMenuOpening} = useContext(OptionsContext);
    const { fire} = useContext(AccessibilityContext);
    
    return (
        <div className={`navbar-header-container ${!fire && "navbar-header-container-dark"} `} >
            <div onClick={handleMenuOpening} className='navbar-button-options'>
                <img src={hamburgerMenu} alt='hamburger-menu'/>
            </div>
            <div className='navbar-laptop-options'>
                <Link to='/Home' className='navbar-link'>Home</Link>
                <Link to='/Stack' className='navbar-link'>Stack</Link>
                <Link to='/Now' className='navbar-link'>Now</Link>
                <Link to='/ContactMe' className='navbar-link'>Contact me</Link>
            </div>
        </div>
    )
}

export default Navbar