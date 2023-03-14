import proyectImg from './../../../assets/extras/portfolio-header.png';

import './proyects.css'

import  { useContext } from "react";
import AccessibilityContext from '../../../contexts/AccessibilityContext';

const Proyect = ({title , tec, link}) => {
  const {fire} = useContext(AccessibilityContext);

    return (
        <a href={link} target='_blank' className='proyect-link' rel='noreferrer'>
          <article className={`proyect-container ${!fire && "proyect-container-dark"}`}>
              <img src={proyectImg} className='proyect-img' alt='proyect-img'/>
              <h2 className={`${!fire && "text-dark"}`}>{title}</h2>
              <p className={`${!fire && "text-dark"}`}>{tec}</p>
          </article>
        </a>
    )
  }
  
  export default Proyect