/* eslint-disable jsx-a11y/heading-has-content */
import './AboutProject.css';
function AboutProject() {
  return (
    <section className='about' id='about'>
        <h3 className='section__title'>О проекте</h3>
        <div className='about__info'>
          <h4 className='about__info-title'>Дипломный проект включал 5 этапов</h4>
          <p className='about__info-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about__info'>
          <h4 className='about__info-title'>На выполнение диплома ушло 5 недель</h4>
          <p className='about__info-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className='project-time'>
          <div className='time-line time-line_backend'>
            <h4 className='time-line__title time-line__title_backend'>1 неделя</h4>
            <p className='time-line__text'>Back-end</p>
          </div>
          <div className='time-line time-line_frontend'>
            <h4 className='time-line__title time-line__title_frontend'>4 недели</h4>
            <p className='time-line__text'>Front-end</p>
          </div>
        </div>
    </section>
  )
}
export default AboutProject