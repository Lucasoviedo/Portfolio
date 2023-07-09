import  { useContext } from "react"

import AccessibilityContext from '../../../contexts/AccessibilityContext';

import myPic from '../../../assets/extras/me.jpg'
import englishCV from '../../../assets/docs/LucasOviedo-EN.pdf';
import spanishCV from '../../../assets/docs/LucasOviedo-ES.pdf';

import './aboutMe.css'

const AboutMe = () => {
  const {fire, lenguaje, texts} = useContext(AccessibilityContext);

  return (
    <section id='aboutMe' className={`section-container ${!fire && "section-container-dark"}`}>
      <div className='aboutMe-container container'>
        <h2 className={`aboutMe-title ${!fire && "aboutMe-title-dark"}`}>{texts.aboutMe.title}</h2>
        <div className='aboutMe-info'>
          <div className='aboutMe-info-changer'>
            <img className="aboutMe-myPic" src={myPic} alt='me'/>
            <p className={`${!fire && "aboutMe-text-dark"}`}>
              {texts.aboutMe.description}
            </p>
          </div>
          <a href={ lenguaje === "en" ? englishCV : spanishCV} target="_blank" rel="noreferrer">
            <button className={`aboutMe-cv-button ${!fire && "aboutMe-cv-button-dark"}`}>{texts.aboutMe.button}</button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe