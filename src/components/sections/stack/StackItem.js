import './stack.css'

import  { useContext } from "react";
import AccessibilityContext from '../../../contexts/AccessibilityContext';

const StackItem = ({image , name , link}) => {
  const {fire} = useContext(AccessibilityContext);

    return (
      <a href={link} className='stackItem-link' target='_blank' rel="noreferrer">
        <div className='stackItem-container'>
          <article className='stackItem-img-container'>
              <img src={image} className="stackItem-img" alt={name}/>
          </article>
          <h4 className={`${!fire && "text-dark"}`}>{name}</h4>
        </div>
      </a>
    )
  }
  
export default StackItem