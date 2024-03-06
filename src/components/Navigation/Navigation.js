import './Navigation.css'
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMobileMenu() {
    setIsOpen(!isOpen);
  }
  const path = useLocation();
  return(
    <><nav className="menu">
        <NavLink to="/movies" className="menu__link">Фильмы</NavLink>
        <NavLink to="/saved-movies" className="menu__link">Сохраненные фильмы</NavLink>
      </nav><div className='account'>
                <NavLink to="/profile" className="account__link">Аккаунт</NavLink>
            </div>
      <div className="hamburger-menu" onClick={handleMobileMenu}>
        <div className="hamburger"></div>
      </div>
      <div className={`popup__mobile ${isOpen ? `popup__mobile_active` : ''} `}>
        <div className='menu__mobile__block'>
          <div className='menu__mobile__close-icon' onClick={handleMobileMenu}></div>
          <nav className="menu menu__mobile">
            <NavLink to="/" onClick={handleMobileMenu} className={`menu__link ${path.pathname !== '/' ? '' : 'menu__link_active'}`}>Главная</NavLink>
            <NavLink to="/movies" onClick={handleMobileMenu} className={`menu__link ${path.pathname !== '/movies' ? '' : 'menu__link_active'}`}>Фильмы</NavLink>
            <NavLink to="/saved-movies" onClick={handleMobileMenu} className={`menu__link ${path.pathname !== '/saved-movies' ? '' : 'menu__link_active'}`}>Сохраненные фильмы</NavLink>
          </nav>
          <nav className="menu menu__mobile">
          <NavLink to="/profile" onClick={handleMobileMenu} className="account__link account__link_mobile">Аккаунт</NavLink>
          </nav>
        </div>
      </div>
    </>
  )
}
export default Navigation;