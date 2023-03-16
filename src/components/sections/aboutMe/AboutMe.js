import './aboutMe.css'

import  { useContext } from "react";
import AccessibilityContext from '../../../contexts/AccessibilityContext';

const AboutMe = () => {
  const {fire, texts} = useContext(AccessibilityContext);

  return (
    <section id='aboutMe' className={`section-container ${!fire && "section-container-dark"}`}>
      <div className='aboutMe-container container'>
        <h2 className={`aboutMe-title ${!fire && "aboutMe-title-dark"}`}>{texts.aboutMe.title}</h2>
        <div className='aboutMe-info'>
          <p className={`${!fire && "aboutMe-text-dark"}`}>
            {texts.aboutMe.description}
          </p>
          <button className={`aboutMe-cv-button ${!fire && "aboutMe-cv-button-dark"}`}>{texts.aboutMe.button}</button>
        </div>
      </div>
    </section>
  )
}

export default AboutMe