import './proyects.css'

import  { useContext, useState } from "react";
import AccessibilityContext from '../../../contexts/AccessibilityContext';
import { ModalImages } from '../../generals/modalImages/ModalImages';

const Proyect = ({title , tec, link , images, description}) => {
  const {fire} = useContext(AccessibilityContext);

  const [openModal, setOpenModal] = useState(false)

  const handleImageModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className='proyect-container'>
      <article className={`proyect-image-container ${!fire && "proyect-image-container-dark"}`}
      onClick={handleImageModal}
      >
          <img src={images[0]} className='proyect-img' alt='proyect-img'/>
      </article>
      <div>
        <h2 className={`${!fire && "text-dark"}`}>{title}</h2>         {/* link */}
        <p className={`${!fire && "text-dark"}`}>{tec}</p>
        <p className={`${!fire && "text-dark"}`}>{description}</p>
      </div>
      { openModal && 
        <ModalImages handleImageModal={handleImageModal} images={images}/>}
    </div>
  )
}

export default Proyect