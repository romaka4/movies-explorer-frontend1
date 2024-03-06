import './Login.css'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import logo from '../../images/logo.svg'
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const onSubmit = (data) =>{
    console.log(data)
  }
  return (
    <div className='auth'>
      <div className="auth__header">
      <a href="/"><img 
        src={logo}
        alt="Логотип"
        className="header__logo"
        /></a>
        <h2 className='auth__title'>Рады видеть!</h2>
      </div>
      <form className='auth__form' noValidate onSubmit={handleSubmit(onSubmit)}>
        
            <label htmlFor="email" className='form__label'>Email</label>
        <input
              type="email"
              className="auth__input"
              placeholder="pochta@yandex.ru"
              name="email"
              id="email"
              {...register("email", { 
                required: 'Поле обязательно к заполнению', 
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                  message: 'Некорректный email'
                }
              })}
            />
            <div className='error__input'>{errors?.email &&
              <p className='error__message'>{errors?.email?.message || 'Ошибка email'}</p>}
            </div>
            <label htmlFor="password" className='form__label'>Пароль</label>
            <input
              type="password"
              className="auth__input"
              placeholder="12345678"
              name="password"
              id="password"
              {...register("password", { 
                required: 'Поле обязательно к заполнению', 
                maxLength: {
                  value: 40,
                  message: 'Допустимое количество символов 40!'
                },
                minLength: {
                  value: 2,
                  message: 'Минимальное количество символов 2!'
                } 
              })}
            />
            <div className='error__input'>{errors?.password &&
              <p className='error__message'>{errors?.password?.message || 'Ошибка пароля'}</p>}
            </div>
        <button className='login__submit auth__submit' type="submit">Войти</button>
      </form>
      <div className="auth__register-signin">
        <p className='register__question'>Ещё не зарегистрированы?</p>
        <Link to="/signup" className="auth__signin-link">Регистрация</Link>
      </div>
    </div>
  )
}


export default Login;