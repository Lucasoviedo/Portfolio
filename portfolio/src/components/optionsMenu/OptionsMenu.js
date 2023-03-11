import React from 'react'
import  { useContext } from "react";
import { HashLink as Link } from 'react-router-hash-link'

import OptionsContext from '../../contexts/OptionsContext';

import './optionsMenu.css'

const OptionsMenu = () => {
    const { handleMenuOpening} = useContext(OptionsContext);
    return (
        <div className='optionsMenu-container'>
            <div className='optionsMenu-links'>
                <Link to="#home" smooth 
                className='optionsMenu-link' onClick={handleMenuOpening}>
                    Home
                </Link>
                <Link to="#stack" smooth 
                className='optionsMenu-link' onClick={handleMenuOpening}>
                    Stack
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