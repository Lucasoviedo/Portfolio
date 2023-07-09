import { Box, Modal } from '@mui/material';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

import iconoCruzBlanca from '../../../assets/modal/cruz-blanca-imagen-zoom.svg'
import iconoFlechaBlanca from '../../../assets/modal/flecha-blanca-der-imagen-zoom.svg'

import './modalImages.css'

export const ModalImages = ({images, handleImageModal}) => {

    const [imagenActual , setImagenActual] = useState(0);

    const handleClickOnButton = (event , index) => {
        event.stopPropagation()
        handleImageChange(index)
    }

    const handleImageChange = (index) => {
        if(index === -1){
            setImagenActual(images.length - 1)
        } else if(index === images.length){
            setImagenActual(0)
        } else {
            setImagenActual(index)
        }
    }
    
    return (
        <Modal
            open={true}
            key={uuidv4()}
        >
            <Box>
                <div className='productoSeleccionado-modal-contenedor' onClick={handleImageModal}>
                    <div className='productoSeleccionado-modal-iconos'>
                        <div>{imagenActual + 1 }/{images.length}</div>
                        <img src={iconoCruzBlanca} 
                            onClick={handleImageModal} alt="iconos-cruz"
                        />
                    </div>
                    <div className='productoSeleccionado-modal-imagen-contenedor'>
                        <img alt="iconoFlechaBlanca" src={iconoFlechaBlanca} style={{transform: "rotate(180deg)"}} onClick={(event)=>handleClickOnButton(event, imagenActual - 1)}/>
                        <img alt="iconos-productoImagen" src={images[imagenActual]} style={{maxWidth : "80%",maxHeight : "80vh"}} onClick={(event) => event.stopPropagation()} />
                        <img alt="iconoFlechaBlanca" src={iconoFlechaBlanca} onClick={(event) => { handleClickOnButton(event,imagenActual + 1)}}/>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}