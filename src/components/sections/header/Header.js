import headerImage from '../../../assets/extras/portfolio-header.png'

import './header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <img src={headerImage} alt='Header'/>
            <div>
                <h1>@LUCASOVIEDO</h1>
            </div>
        </div>
    )
}

export default Header