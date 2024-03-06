
import './App.css';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import Footer from '../Footer/Footer'
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const path = useLocation();
  return (
    <div className="body">
      {path.pathname === '/' || path.pathname === '/movies' || path.pathname === '/saved-movies' || path.pathname === '/profile' ? <Header /> : ''}
      <Routes>
        <Route path='/' element={<Main />}  />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {path.pathname === '/' || path.pathname === '/movies' || path.pathname === '/saved-movies' ? <Footer /> : ''}
    </div>
  );
}

export default App;
