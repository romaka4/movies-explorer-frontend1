import './Promo.css';
import logoTitle from '../../images/header_title_logo.svg'
function Promo() {
  return (
    <div className='promo'>
      <img
          src={logoTitle}
          alt="Логотип"
          className="promo__logo"
        />
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
    </div>
  )
}
export default Promo