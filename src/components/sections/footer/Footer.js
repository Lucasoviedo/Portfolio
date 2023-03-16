import gitLogo from '../../../assets/logos/github-logo.svg'

import './footer.css'

import  { useContext } from "react";
import AccessibilityContext from '../../../contexts/AccessibilityContext';

export const Footer = () => {
    const {fire, texts} = useContext(AccessibilityContext);

    return (
        <div className={`footer-container ${!fire && "footer-container-dark"}`}>
            <a className='footer-link' href='https://github.com/Lucasoviedo/Portfolio/' 
            target='_blank' rel="noreferrer">
                {texts.footer}
            </a>
            <img src={gitLogo} className='footer-git-logo' alt='github-logo'/>
        </div>
    )
}
