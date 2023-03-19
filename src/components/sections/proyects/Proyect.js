import './proyects.css'

import  { useContext, useState } from "react";
import AccessibilityContext from '../../../contexts/AccessibilityContext';
import {Modal} from '../../generals/modal/Modal'

const Proyect = ({title , tec, link , images, description}) => {
  const {fire} = useContext(AccessibilityContext);

  const [openModal, setOpenModal] = useState(false)

  const handleImageModal = () => {
    setOpenModal(!openModal)
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  function handlePrev() {
    setCurrentSlide(currentSlide => (currentSlide - 1 + 4) % 4);
  }

  function handleNext() {
    setCurrentSlide(currentSlide => (currentSlide + 4) % 4);
  }

  return (
    <div className='proyect-container'>
      <article className={`proyect-image-container ${!fire && "proyect-image-container-dark"}`}
      onClick={handleImageModal}>
          <img src={images[0]} className='proyect-img' alt='proyect-img'/>
      </article>
      <div>
        <h2 className={`${!fire && "text-dark"}`}>{title}</h2>
        <p className={`${!fire && "text-dark"}`}>{tec}</p>
        <p className={`${!fire && "text-dark"}`}>{description}</p>
      </div>

      { openModal && 
        <Modal>
          <div className='proyect-modal-images'>
            <div className="slider">
              {images.forEach( (element, index) => {
                <div className="slide">
                  <img src={images[index]} style={{ opacity: currentSlide === index ? 1 : 0 }}/>
                </div>
              })};
            </div>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </Modal>}
    </div>
  )
}

export default Proyect