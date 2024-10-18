import { authSocial } from '../../dataFiles/AuthSocialData';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom';
import { authSelect, fetchRegister } from '../../redux/slices/auth.js';


export default function Registration () {

  const isLogin = useSelector(authSelect);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: ''
    }
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values))


    if(!data.payload) {
      alert('Не удалось зарегистрироваться.')
    }

    if(data.payload) {
      sessionStorage.setItem('token', data.payload.token)
      console.log(data.payload)
    }
  };

  if(isLogin) {
    return <Navigate to='/'/>
  }


  return(
      <main className="main">
        <section className="auth-block">
              <div className="container">
                  <div className="auth-block__inner">
                      <div className="auth-form">
                        <div className="auth-form__title">

                          <Link className='auth-form__reg'>
                                Регистрация
                          </Link>

                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="auth-form__sign">
                             <input type="text" className="auth-form__name auth-input" 
                                  name="name" id="" placeholder="Ваше имя"  
                                  {...register('fullName', { required: 'Укажите инициалы' })}
                              />
                                {errors.fullName && (
                                    <div className="error-message">{errors.fullName.message}</div>
                                )}
                             <input type="text" className="auth-form__phone auth-input" 
                                  name="phone" id="" placeholder="Ваш телефон"  
                                  {...register('phone', { required: 'Укажите номер телефона' })}
                              />
                                {errors.phone && (
                                  <div className="error-message">{errors.phone.message}</div>
                                )}
                             <input type="email" className="auth-form__email auth-input" 
                                  name="email" id="" placeholder="Ваш e-mail" 
                                  {...register('email', { required: 'Укажите email' })}
                              />
                              {errors.email && (
                                  <div className="error-message">{errors.email.message}</div>
                                )}
                             <input type="submit" className="auth-form__btn" value="Отправить"/>
                           </form>

                        <div className="auth-form__social">
                              <p className="auth-form__social-title">Регистрация с помощью соцсетей:</p>
                              <ul className="auth-form__social-list">
                                  {authSocial.map((item, index)=> (
                                       <li key={index} className="auth-form__social-item">
                                          <Link className="auth-form__social-link">
                                           <img src={item.icon} alt="icon" className="auth-form__img"/>
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
  )}