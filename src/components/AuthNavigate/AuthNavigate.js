import './AuthNavigate.css'
import { Link } from 'react-router-dom';

function AuthNavigate() {
  return(
    <div className='auth-nav'>
            <Link to='signup'><button className='auth-nav__register'>
            Регистрация
            </button></Link>
              <Link to='signin'><button className='auth-nav__authorize'>
              Войти
              </button></Link>
          </div>
  )
}
export default AuthNavigate;