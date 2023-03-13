import proyectImg from './../../../assets/extras/portfolio-header.png';

import './proyects.css'

const Proyect = ({title , tec, link}) => {
    return (
        <a href={link} target='_blank' className='proyect-link' rel='noreferrer'>
          <article className='proyect-container'>
              <img src={proyectImg} className='proyect-img' alt='proyect-img'/>
              <h2>{title}</h2>
              <p>{tec}</p>
          </article>
        </a>
    )
  }
  
  export default Proyect