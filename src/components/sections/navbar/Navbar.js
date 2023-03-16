import React from 'react'
import './navbar.css'
import  { useContext } from "react";
import OptionsContext from '../../../contexts/OptionsContext';
import AccessibilityContext from '../../../contexts/AccessibilityContext';

import hamburgerMenu from '../../../assets/extras/hamburger-menu.svg'
import { Flags } from '../../extras/flags/Flags';
import { Bonfire } from '../../extras/bonfire/Bonfire';

const Navbar = ( ) => {
    const { handleMenuOpening} = useContext(OptionsContext);
    const { fire, texts} = useContext(AccessibilityContext);
    
    return (
        <div className={`navbar-header-container ${!fire && "navbar-header-container-dark"} `} >
            <div onClick={handleMenuOpening} className='navbar-button-options'>
                <img src={hamburgerMenu} alt='hamburger-menu'/>
            </div>
            <div className='navbar-laptop-options'>
                <Flags/>
                <div>
                    <a href="#aboutMe"  
                    className='navbar-link'>
                        {texts.categories.aboutMe}
                    </a>
                    <a href="#history" 
                    className='navbar-link'>
                        {texts.categories.history}
                    </a>
                    <a href="#stack" 
                    className='navbar-link'>
                        {texts.categories.stack}
                    </a>
                    <a href="#proyects" 
                    className='navbar-link'>
                        {texts.categories.proyects}
                    </a>
                    <a href="#contactMe" 
                    className='navbar-link'>
                        {texts.categories.contactMe}
                    </a>
                </div>
                <Bonfire/>
            </div>
        </div>
    )
}

export default Navbar