import gitLogo from '../../../assets/logos/github-logo.svg'

import './footer.css'

export const Footer = () => {
    return (
        <div className='footer-container'>
            <a className='footer-link' href='https://github.com/Lucasoviedo/Portfolio/tree/main/portfolio' 
            target='_blank' rel="noreferrer">
                Built and designed by Lucas Oviedo
            </a>
            <img src={gitLogo} className='footer-git-logo' alt='github-logo'/>
        </div>
    )
}
