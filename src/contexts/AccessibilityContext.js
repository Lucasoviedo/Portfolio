import { useState , useEffect } from "react";
import { createContext } from "react";

import  jsonData from '../utilities/texts.json'

const AccessibilityContext = createContext();
const lenguajeData = JSON.parse(JSON.stringify(jsonData.lenguajes))

const AccessibilityProvider = ({ children }) => {

    console.log(lenguajeData)

    const [lenguaje, setLenguaje] = useState("en")

    const [texts, setTexts] = useState(lenguajeData.en)
    const [fire, setFire] = useState(true)

    useEffect (() => {
        setTexts(lenguajeData.en)
    }, [])

    const handleFireChange = () => {
        setFire(!fire)
    }

    const handleLenguajeChange = (e) => {
        if(e.target.alt === "usa-flag"){
            setLenguaje("en")
            setTexts(lenguajeData.en)
        } else {
            setLenguaje("es")
            setTexts(lenguajeData.es)
        }
    }

    const data = { fire, handleFireChange , 
        texts, lenguaje ,handleLenguajeChange };

    return <AccessibilityContext.Provider value={data}>{children}</AccessibilityContext.Provider>;
};

export { AccessibilityProvider };
export default AccessibilityContext;