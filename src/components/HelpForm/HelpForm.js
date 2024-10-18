import './HelpForm.css'
import ValidForm from '../ValidForm/ValidForm'

export default function HelpForm() {

    return(
        <section className="help-form__block">
        <div className="container">
            <div className="help-form__block-inner">
                <div className="help-form__owl">
                    <p className="help-form__owl-title">Помочь с выбором?</p>
                    <span className="help-form__owl-subt">Оставьте заявку и наши специалисты свяжутся с вами, ответят на все
                        вопросы и подберут подходящий вариант обучения.
                    </span>
                </div>
                <div className="help-form__container">
                    <ValidForm/> 
                </div>
            </div>
        </div>
    </section>
    )
}



