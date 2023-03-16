import Proyect from "./Proyect"

import './proyects.css'

import  { useContext } from "react";
import AccessibilityContext from '../../../contexts/AccessibilityContext';

const Proyects = () => {
  const {fire, texts} = useContext(AccessibilityContext);

  return (
    <section id='proyects' className={`section-container ${!fire && "section-container-dark"} proyects-container`}>
        <h2 className={`${!fire && "text-dark"}`}>{texts.proyects.title}</h2>
        <Proyect title='Portfolio' tec='React-JavaScript-HTML-CSS'
          link='https://github.com/Lucasoviedo/Portfolio'/>
    </section>
  )
}

export default Proyects