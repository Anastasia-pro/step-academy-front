import { useState } from 'react';
import { Link } from 'react-router-dom';  

export default function ValidForm() {

    const [message, setMessage] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    
  const handleChangeName = event => {
    const result = event.target.value.replace(/[^a-zа-яё\s]/gi, '');
    setMessage(result);
  }
  const handleChangeEmail = event => {
    const result = event.target.value.replace(/[^a-zA-Z0-9@.]+/g, '');
    setEmail(result);
  }
  const handleChangeTel = event => {
    const result = event.target.value.replace(/\D/,'');
    setTel(result)
  }
  const handleClear = (e) => {
    e.preventDefault()
    setEmail('')
    setMessage('')
    setTel('')
  }
    return(
        <form action="" className="help-form" >
            <input className="help-form__name" 
            type="text" 
            name="name" id="" 
            placeholder="Ваше имя" required  
            value={message} onChange={handleChangeName}/>
            <input className="help-form__email" 
            type="email" 
            name="email" id="" 
            placeholder="Ваш e-mail" required 
            value={email} onChange={handleChangeEmail}/>
            <input className="help-form__tel" 
            type="tel" 
            name="tel" id="" 
            placeholder="Ваш телефон"  required 
            value={tel} onChange={handleChangeTel}
            />
           
            <p className="help-form__agree-text">
                Нажимая на кнопку, я соглашаюсь
                на обработку персональных данных
                и с правилами пользования Платформой
            </p>
            <Link>
                <input 
                className="help-form__btn" 
                type="submit"  
                value="Отправить" 
                onClick={handleClear}
                disabled={!(message && email && tel)}
                />
            </Link> 
           
        </form>
        
    )
}

