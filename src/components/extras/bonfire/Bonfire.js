import  { useContext } from "react";

import AccessibilityContext from "../../../contexts/AccessibilityContext";
import bonfireLogo from '../../../assets/extras/bonfire.svg';

import './bonfire.css'

export const Bonfire = () => {
    const { fire, handleFireChange} = useContext(AccessibilityContext);
    return (
        <div type="button" className={ fire ? "optionsMenu-bonfire-on" : "optionsMenu-bonfire-off" } onClick={handleFireChange}>
            <img src={bonfireLogo} alt='bonfire' className='optionsMenu-bonfire-logo'/>
        </div>
    )
}
