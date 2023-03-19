import  { useContext, useState } from "react";
import AccessibilityContext from '../../../contexts/AccessibilityContext';

import './modal.css'

export const Modal = ({children}) => {
    const {fire} = useContext(AccessibilityContext);
    const [open, setOpen] = useState(true)

    const handleClick = (e) => {
        if(e.target.className === 'modal-container' || e.target.className === 'modal-close-button'){
            setOpen(false)
        }
    }

    return (
        <div onClick={handleClick}>
            {open && 
                <div className='modal-container'>
                    <div className={ fire ? 'modal-card' : 'modal-card-dark'}>
                        <button className='modal-close-button'>X</button>
                        {children}
                    </div>
                </div>
            }
        </div>
    )
}
