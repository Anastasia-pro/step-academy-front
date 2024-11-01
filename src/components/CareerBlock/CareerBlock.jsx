import './CareerBlock.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal'
import {vacDescData } from '../../dataFiles/CareerData' 
import ValidForm from '../ValidForm/ValidForm'
import useAuth from "../../hooks/AuthChecker"


export default function CareerBlock() {
  const { isAuth } = useAuth();
  const [modalActive, setModalActive] = useState(false)
return (
    <section className="vacancies">
      <div className='container'>
        <div className="vacancies-inner">
          <h1 className="vacancies-title">Вакансии</h1>
          <h2 className="vacancies-subtitle">Станьте частью команды ХОД Future Akademy!</h2>

          <section>
           <ul className="vac-block__list">
              {vacDescData.map((item, index) => (
                <details key={index} className="vac-block__item">
                  <summary className="vac-block__link">{item.vacTitle}</summary>
                  <p className="vac-block__descr">{item.vacSubt}</p>
                  <span className="vac-block__text">{item.vacDesc}</span>

                  <Link className="vac-block__btn" onClick={() => setModalActive(true)}>Откликнуться</Link>
                    {isAuth ? (
                      <Modal active={modalActive} setActive={setModalActive}>
                        <p>Спасибо за заявку! Мы свяжемся с Вами в ближайшее время!</p>
                      </Modal>
                      ) : (
                      <Modal active={modalActive} setActive={setModalActive}>
                        <ValidForm />
                      </Modal>
                    )}
                </details>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}
