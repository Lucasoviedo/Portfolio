import  { useContext } from "react";
import OptionsContext from '../../contexts/OptionsContext';
import AccessibilityContext from "../../contexts/AccessibilityContext";

import './optionsMenu.css'
import { Flags } from "../extras/flags/Flags";
import { Bonfire } from "../extras/bonfire/Bonfire";

const OptionsMenu = () => {
    const { handleMenuOpening} = useContext(OptionsContext);
    const { texts, fire } = useContext(AccessibilityContext);
    return (
        <div className={fire ? 'optionsMenu-container' : 'optionsMenu-container-dark'}>
            <div className='optionsMenu-links'>
                <Flags/>
                <a href="#aboutMe" style={{'marginTop' : '25px'}}
                className='optionsMenu-link' onClick={handleMenuOpening}>
                    {texts.categories.aboutMe}
                </a>
                <a href="#history" 
                className='optionsMenu-link' onClick={handleMenuOpening}>
                    {texts.categories.history}
                </a>
                <a href="#stack" 
                className='optionsMenu-link' onClick={handleMenuOpening}>
                    {texts.categories.stack}
                </a>
                <a href="#proyects" 
                className='optionsMenu-link' onClick={handleMenuOpening}>
                    {texts.categories.proyects}
                </a>
                <a href="#contactMe" 
                className='optionsMenu-link' onClick={handleMenuOpening}>
                    {texts.categories.contactMe}
                </a>
            </div>
            <div style={{"marginTop": "15px"}}>
                <Bonfire/>
            </div>
            <div></div>
        </div>
    )
}

export default OptionsMenu