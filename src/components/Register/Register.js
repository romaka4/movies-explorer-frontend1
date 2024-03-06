import './Register.css'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import logo from '../../images/logo.svg'
function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: '',
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
        <h2 className='auth__title'>Добро пожаловать!</h2>
      </div>
      <form className='auth__form'  noValidate onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className='form__label'>Имя</label>
        <input
              type="name"
              className="auth__input"
              placeholder="Виталий"
              id="name"
              {...register("name", { 
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
            <div className='error__input'>{errors?.name &&
              <p className='error__message'>{errors?.name?.message || 'Ошибка имени'}</p>}
            </div>
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
                  value: 8,
                  message: 'Минимальное количество символов 8!'
                } 
              })}
            />
            <div className='error__input'>{errors?.password &&
              <p className='error__message'>{errors?.password?.message || 'Ошибка пароля'}</p>}
            </div>
        <button className='auth__submit' type="submit" >Зарегистрироваться</button>
      </form>
      <div className="auth__register-signin">
        <p className='register__question'>Уже зарегистрированы?</p>
        <Link to="/signin" className="auth__signin-link">Войти</Link>
      </div>
    </div>
  )
}

export default Register;