import { useState , useEffect } from "react";
import { createContext } from "react";

import  jsonData from '../utilities/texts.json'

const AccessibilityContext = createContext();
const lenguajeData = JSON.parse(JSON.stringify(jsonData.lenguajes))

const AccessibilityProvider = ({ children }) => {
    
    const [lenguaje, setLenguaje] = useState("en")
    
    const [texts, setTexts] = useState(lenguajeData.en)
    const [fire, setFire] = useState(true)
    
    useEffect (() => {
        setTexts(lenguajeData.en)

        if(localStorage.getItem("AppTheme") === null){
            localStorage.setItem("AppTheme", fire);
        } else if (localStorage.getItem("AppTheme") === "true") {
            setFire(true)
        } else {
            setFire(false)
        }

        if(localStorage.getItem("AppLenguaje") === null){
            localStorage.setItem("AppLenguaje", "en");
        } else if (localStorage.getItem("AppLenguaje") === "en") {
            setTexts(lenguajeData.en)
            setLenguaje("en")
        } else {
            setTexts(lenguajeData.es)
            setLenguaje("es")
        }
    }, [])

    const handleFireChange = () => {
        localStorage.setItem("AppTheme", !fire);
        setFire(!fire)
    }

    const handleLenguajeChange = (e) => {
        if(e.target.alt === "usa-flag"){
            setLenguaje("en")
            setTexts(lenguajeData.en)
            localStorage.setItem("AppLenguaje", "en");
        } else {
            setLenguaje("es")
            setTexts(lenguajeData.es)
            localStorage.setItem("AppLenguaje", "es");
        }
    }

    const data = { fire, handleFireChange , 
        texts, lenguaje ,handleLenguajeChange };

    return <AccessibilityContext.Provider value={data}>{children}</AccessibilityContext.Provider>;
};

export { AccessibilityProvider };
export default AccessibilityContext;