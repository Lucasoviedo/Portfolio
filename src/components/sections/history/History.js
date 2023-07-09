import './history.css'

import  { useContext } from "react";
import AccessibilityContext from '../../../contexts/AccessibilityContext';

const History = () => {
  const {fire, texts} = useContext(AccessibilityContext);

  return (
    <section id='history' className={`section-container ${!fire ? "section-container-dark" : ""}`}>
      <div className='container'>
        <article className="history-work-article">
            <h3 className={`${!fire ? "text-dark" : ""}`}>{texts.history.workTitle}</h3>
            <p className={`${!fire ? "text-dark" : ""}`}>{texts.history.workPart1}</p>
              <p className={`${!fire ? "text-dark" : ""}`}>{texts.history.workPart2}</p>
        </article>
        <article className="history-studies-article">
            <h3 className={`${!fire ? "text-dark" : ""}`}>{texts.history.studyTitle}</h3>
            <p className={`${!fire ? "text-dark" : ""}`}>{texts.history.studyPart1}</p>
            <p className={`${!fire ? "text-dark" : ""}`}>{texts.history.studyPart2}</p>
        </article>
      </div>
    </section>
  )
}

export default History