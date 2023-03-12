import proyectImg from './../../../assets/extras/portfolio-header.png';

import './proyects.css'

const Proyect = () => {
    return (
      <article className='proyect-container'>
        <img src={proyectImg} className='proyect-img'/>
        <h2>Title</h2>
        <p>Description</p>
      </article>
    )
  }
  
  export default Proyect