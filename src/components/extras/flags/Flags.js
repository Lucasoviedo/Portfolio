import  { useContext } from "react";

import flagSpain from '../../../assets/extras/flag-spain.svg';
import flagUsa from '../../../assets/extras/flag-usa.svg';
import AccessibilityContext from "../../../contexts/AccessibilityContext";

import './flags.css'

export const Flags = () => {
    const {lenguaje , handleLenguajeChange} = useContext(AccessibilityContext);
    return (
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
    )
}
