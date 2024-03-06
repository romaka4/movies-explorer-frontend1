import './Header.css'
import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';
import AuthNavigate from '../AuthNavigate/AuthNavigate'
import { Routes, Route, useLocation} from 'react-router-dom';
function Header() {
  const path = useLocation();
  return (
    <div className={`header ${path.pathname === '/' ? '' : 'header_auth'}`}>
      <div className='header__navigate'>
        <a href="/#about"><img
          src={logo}
          alt="Логотип"
          className="header__logo"
        /></a>
        <Routes>
          <Route path='/' element={ <AuthNavigate /> } />
          <Route path='/movies' element={ <Navigation /> } />
          <Route path='/saved-movies' element={ <Navigation /> } />
          <Route path='/profile' element={ <Navigation /> } />
        </Routes>
      </div>
    </div>
  )
}

export default Header;