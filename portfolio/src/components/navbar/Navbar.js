import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
import LogInContext  from '../../LoginContext'
import  { useContext } from "react";

const Navbar = ( ) => {
    const { handleMenuOpening} = useContext(LogInContext);
    return (
        <div className='navbar-header-container'>
            <div onClick={handleMenuOpening} className='navbar-button-options'>
                H
            </div>
            <div className='navbar-laptop-options'>
                <Link to='/Home' className='navbar-link'>Home</Link>
                <Link to='/CV' className='navbar-link'>CV</Link>
                <Link to='/Now' className='navbar-link'>Now</Link>
                <Link to='/ContactMe' className='navbar-link'>Contact me</Link>
            </div>
        </div>
    )
}

export default Navbar