import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
import  { useContext } from "react";
import OptionsContext from '../../../contexts/OptionsContext';

const Navbar = ( ) => {
    const { handleMenuOpening} = useContext(OptionsContext);
    return (
        <div className='navbar-header-container'>
            <div onClick={handleMenuOpening} className='navbar-button-options'>
                H
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