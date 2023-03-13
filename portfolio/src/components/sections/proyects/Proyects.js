import Proyect from "./Proyect"

import './proyects.css'

const Proyects = () => {
  return (
    <section id='proyects' className='section-container'>
        <h2>Proyects</h2>
        <Proyect title='Portfolio' tec='React-JavaScript-HTML-CSS'
          link='https://github.com/Lucasoviedo/Portfolio/tree/main/portfolio'/>
    </section>
  )
}

export default Proyects