import Proyect from "./Proyect"
import proyectImg from './../../../assets/extras/portfolio-header.png';

import scopCleanSearchDesktop from './../../../assets/job-scop/scop-cleanSearchDesktop.png';
import scopLogin from './../../../assets/job-scop/scop-login.png';
import scopMenuMovile from './../../../assets/job-scop/scop-menuMovile.png';
import scopSearchDesktop from './../../../assets/job-scop/scop-searchDesktop.png';

import './proyects.css'

import  { useContext } from "react";
import AccessibilityContext from '../../../contexts/AccessibilityContext';

const Proyects = () => {
  const {fire, texts} = useContext(AccessibilityContext);

  return (
    <section id='proyects' className={`section-container ${!fire && "section-container-dark"} proyects-container`}>
      <div className='container'>
        <h2 className={`${!fire && "text-dark"}`}>{texts.proyects.title}</h2>
        <Proyect title='Portfolio' tec='React-JavaScript-HTML-CSS' images={[proyectImg]} description={texts.proyects.portfolio}
          link='https://github.com/Lucasoviedo/Portfolio'/>
        <Proyect title='Scop' tec='React-JavaScript-HTML-CSS' images={[scopCleanSearchDesktop,scopLogin,scopMenuMovile,scopSearchDesktop]}
          description={texts.proyects.scop} link='https://github.com/Lucasoviedo/Portfolio'/>
      </div>
    </section>
  )
}

export default Proyects