import React from 'react'
import './optionsMenu.css'
import { HashLink as Link } from 'react-router-hash-link'
import  { useContext } from "react";
import LogInContext  from '../../LoginContext'

const OptionsMenu = () => {
    const { handleMenuOpening} = useContext(LogInContext);
    return (
        <div className='optionsMenu-container'>
            <div className='optionsMenu-links'>
                <Link to="#home" smooth 
                className='optionsMenu-link' onClick={handleMenuOpening}>
                    Home
                </Link>
                <Link to="#cv" smooth 
                className='optionsMenu-link' onClick={handleMenuOpening}>
                    CV
                </Link>
                <Link to="#now" smooth 
                className='optionsMenu-link' onClick={handleMenuOpening}>
                    Now
                </Link>
                <Link to="#contactMe" smooth 
                className='optionsMenu-link' onClick={handleMenuOpening}>
                    Contact me
                </Link>
            </div>
            <div>H</div>
            <div>↧</div>
        </div>
    )
}

export default OptionsMenu