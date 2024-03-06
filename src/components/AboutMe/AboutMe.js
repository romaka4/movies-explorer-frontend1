/* eslint-disable jsx-a11y/heading-has-content */
import './AboutMe.css'
import photo from '../../images/photo.png'
function AboutMe() {
  return(
    <section className='about-me' id='aboutMe'>
      <h3 className='section__title'>Студент</h3>
      <div className='about-me__container'>
        <div className='about-me__info'>
          <h2 className='about-me__name'>Виталий</h2>
          <h4 className='about-me__profession'>Фронтенд-разработчик, 30 лет</h4>
          <p className='about-me__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <p className='about-me__github'>Github</p>
        </div>
        <img
          src={photo}
          alt="Фото студента"
          className="about-me__photo"
        />
      </div>
    </section>
  )
}
export default AboutMe