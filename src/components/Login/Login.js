import './Login.css'
import { authSocial } from '../../dataFiles/AuthSocialData';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { authSelect, fetchLogin, logout } from '../../redux/slices/auth.js';

export default function Login() {

  const isLogin = useSelector(authSelect);
  const dispatch = useDispatch();


  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      fullName: '',
      email: ''
    }
  });



  const onSubmit = async (values) => {
    const data = await dispatch(fetchLogin(values))

    if(!data.payload) {
      alert('Не удалось войти. Повторите попытку или введите другие данные.')
    }

    if(data.payload) {
      window.sessionStorage.setItem('token', data.payload.token)
    }
  };


  if(isLogin) {
    return <Navigate to='/' />
  }

  return (
    <main className="main">
      <section className="auth-block">
        <div className="container">
          <div className="auth-block__inner">
            <div className="auth-form">
              <div className="auth-form__title">
                <Link className='auth-form__signup'>
                  Войти
                </Link>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="auth-form__sign">
                <input
                  type="text"
                  className="auth-form__name auth-input"
                  name="fullName"
                  placeholder="Ваше имя"
                  {...register('fullName', { required: 'Укажите инициалы' })}
                />
                {errors.fullName && (
                  <div className="error-message">{errors.fullName.message}</div>
                )}

                <input
                  type="email"
                  className="auth-form__email auth-input"
                  name="email"
                  placeholder="Ваш e-mail"
                  {...register('email', { required: 'Введите email' })}
                />
                {errors.email && (
                  <div className="error-message">{errors.email.message}</div>
                )}

                <input type="submit" className="auth-form__btn" value="Отправить" />
              </form>

              <div className="auth-form__social">
                <p className="auth-form__social-title">Войти с помощью соцсетей:</p>
                <ul className="auth-form__social-list">
                  {authSocial.map((item, index) => (
                    <li key={index} className="auth-form__social-item">
                      <Link className="auth-form__social-link">
                        <img src={item.icon} alt="icon" className="auth-form__img" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}