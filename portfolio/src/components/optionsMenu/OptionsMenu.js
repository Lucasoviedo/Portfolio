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
                <Link to="#aboutMe" smooth 
                className='optionsMenu-link' onClick={handleMenuOpening}>
                    About me
                </Link>
                <Link to="#history" smooth 
                className='optionsMenu-link' onClick={handleMenuOpening}>
                    History
                </Link>
                <Link to="#stack" smooth 
                className='optionsMenu-link' onClick={handleMenuOpening}>
                    Stack
                </Link>
                <Link to="#proyects" smooth 
                className='optionsMenu-link' onClick={handleMenuOpening}>
                    Proyects
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