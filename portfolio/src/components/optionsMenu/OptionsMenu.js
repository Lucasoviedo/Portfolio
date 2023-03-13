import  { useContext } from "react";

import { HashLink as Link } from 'react-router-hash-link'

import bonfireLogo from '../../assets/extras/bonfire.svg';
import flagSpain from '../../assets/extras/flag-spain.svg';
import flagUsa from '../../assets/extras/flag-usa.svg';

import OptionsContext from '../../contexts/OptionsContext';

import './optionsMenu.css'


const OptionsMenu = () => {
    const { handleMenuOpening} = useContext(OptionsContext);
    return (
        <div className='optionsMenu-container'>
            <div className='optionsMenu-links'>
                <div>
                    <img src={flagUsa} alt='usa-flag'
                    className='optionsMenu-flags'/>
                    <img src={flagSpain} alt='spain-flag'
                    className='optionsMenu-flags optionsMenu-flag-off' />
                </div>
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
            <div>
                <div className="optionsMenu-bonfire-on">
                    <img src={bonfireLogo} alt='bonfire' className='optionsMenu-bonfire-logo'/>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default OptionsMenu