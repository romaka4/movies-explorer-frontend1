import './Profile.css';
import { NavLink } from 'react-router-dom';
function Profile() {
  return (
    <div className='profile'>
      <form className='profile__form'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <div className='profile__item'>
          <p className='profile__input-name'>Имя</p>
          <input className='profile__input' value='Виталий' disabled/>
        </div>
          
        <div className='profile__item'>
          <p className='profile__input-name'>Email</p>
          <input className='profile__input' value='pochta@yandex.ru' disabled/>
        </div>
        <button className='profile__edit'>Редактировать</button>
        <button className='profile__out'><NavLink to="/" className="account__link-out">Выйти из аккаунта</NavLink></button>

      </form>
      
    </div>
  )
}

export default Profile;