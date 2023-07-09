import  { useContext } from "react";

import AccessibilityContext from '../../../contexts/AccessibilityContext';

import './stack.css'

const StackItem = ({image , name , link}) => {
  const {fire} = useContext(AccessibilityContext);

  return (
    <a href={link} className='stackItem-link' target='_blank' rel="noreferrer">
      <div>
        <img src={image} alt={name}/>
        <h4 className={`${!fire ? "text-dark" : ""}`}>{name}</h4>
      </div>
    </a>
  )
}
  
export default StackItem