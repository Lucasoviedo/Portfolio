import gitLogo from '../../../assets/logos/github-logo.svg'

import './footer.css'

import  { useContext } from "react";
import AccessibilityContext from '../../../contexts/AccessibilityContext';

export const Footer = () => {
    const {fire, texts} = useContext(AccessibilityContext);

    return (
        <div id="footer-container" className={fire ? "footer-container" : "footer-container-dark"}>
            <a href='https://github.com/Lucasoviedo/Portfolio/' target='_blank' rel="noreferrer">
                {texts.footer}
            </a>
            <img src={gitLogo} alt='github-logo'/>
        </div>
    )
}
