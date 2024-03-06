import './Footer.css'

function Footer(){
  return(
    <footer className='footer'>
      <h4 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h4>
      <div className='footer__copyright'>
        <p className='footer__copyright-text'>© 2020</p>
        <div className='footer__copyright-source'>
          <p className='footer__copyright-source_practicum'>Яндекс.Практикум</p>
          <p className='footer__copyright-source_github'>Github</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer