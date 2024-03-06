import './MoviesCard.css'
import movies_image from '../../images/movies_image.png'
import { useLocation } from 'react-router-dom';

  function handleLikeClick(evt) {
    console.log(evt.target)
    const btn = evt.target
    btn.classList.toggle('card__saved-button_active');
  }
  function handleDeleteClick(evt) {
    evt.target.parentNode.parentNode.remove();
    
  }
function MoviesCard() {
  const path = useLocation();
  return(
    <li className='card'>
      <img className='movies-image' src={movies_image} alt='Обложка фильма'/>
      <div className='card__info'>
        <p className='card__name'>33 слова о дизайне</p>
        {path.pathname === '/movies' ? 
        <button className='card__saved-button' type='button' onClick={handleLikeClick}/> : 
        <button className='card__delete-button' type='button' onClick={handleDeleteClick}></button>}
        <p className='card__duration'>1ч42м</p>
      </div>
    </li>
  )
}
export default MoviesCard