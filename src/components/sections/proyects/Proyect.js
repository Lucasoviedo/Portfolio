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
    if(currentSlide > 0) {
      setCurrentSlide(currentSlide -1);
    }
  }

  function handleNext() {
    if(currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <div className='proyect-container'>
      <article className={`proyect-image-container ${!fire && "proyect-image-container-dark"}`}
      // onClick={handleImageModal}
      >
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
              {images.map( (element, index) => {
                return (<div className="slide">
                  <img src={images[index]} alt={index} style={{ opacity: currentSlide === index ? 1 : 0 }}/>
                </div>)
              })}
            </div>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </Modal>}
    </div>
  )
}

export default Proyect