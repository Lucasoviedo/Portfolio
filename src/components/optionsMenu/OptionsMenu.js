import  { useContext } from "react";

import { HashLink as Link } from 'react-router-hash-link'

import bonfireLogo from '../../assets/extras/bonfire.svg';
import flagSpain from '../../assets/extras/flag-spain.svg';
import flagUsa from '../../assets/extras/flag-usa.svg';

import OptionsContext from '../../contexts/OptionsContext';
import AccessibilityContext from "../../contexts/AccessibilityContext";

import './optionsMenu.css'

const OptionsMenu = () => {
    const { handleMenuOpening} = useContext(OptionsContext);
    const { fire, handleFireChange, texts, lenguaje , handleLenguajeChange} = useContext(AccessibilityContext);
    return (
        <div className='optionsMenu-container'>
            <div className='optionsMenu-links'>
                <div>
                    <img src={flagUsa} alt='usa-flag'
                    className={`optionsMenu-flags ${lenguaje !== "en" && " optionsMenu-flag-off"}`}
                    onClick={handleLenguajeChange}
                    />
                    <img src={flagSpain} alt='spain-flag'
                    className={`optionsMenu-flags ${lenguaje !== "es" && " optionsMenu-flag-off"}`}
                    onClick={handleLenguajeChange}
                    />
                </div>
                <a href="#aboutMe" smooth 
                className='optionsMenu-link' onClick={handleMenuOpening}>
                    {texts.categories.aboutMe}
                </a>
                <a href="#history" smooth 
                className='optionsMenu-link' onClick={handleMenuOpening}>
                    {texts.categories.history}
                </a>
                <a href="#stack" smooth 
                className='optionsMenu-link' onClick={handleMenuOpening}>
                    {texts.categories.stack}
                </a>
                <a href="#proyects" smooth 
                className='optionsMenu-link' onClick={handleMenuOpening}>
                    {texts.categories.proyects}
                </a>
                <a href="#contactMe" smooth 
                className='optionsMenu-link' onClick={handleMenuOpening}>
                    {texts.categories.contactMe}
                </a>
            </div>
            <div>
                <div type="button" className={ fire ? "optionsMenu-bonfire-on" : "optionsMenu-bonfire-off" } onClick={handleFireChange}>
                    <img src={bonfireLogo} alt='bonfire' className='optionsMenu-bonfire-logo'/>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default OptionsMenu