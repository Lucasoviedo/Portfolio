import headerImage from '../../../assets/extras/portfolio-header.png'

import './header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <img src={headerImage} className='header-img' alt='Header'/>
            <div className='header-title-container'>
                <h1 className='header-title'>@LUCASOVIEDO</h1>
            </div>
        </div>
    )
  }
  
  export default Header