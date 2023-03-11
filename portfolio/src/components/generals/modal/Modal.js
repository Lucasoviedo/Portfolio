import { useState } from "react"

import './modal.css'

export const Modal = ({children}) => {

    const [open, setOpen] = useState(true)

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            {open && 
                <div className='modal-container'>
                    <div className='modal-card'>
                        <button className='modal-close' onClick={handleClose}>X</button>
                        {children}
                    </div>
                </div>
            }
        </>
    )
}
