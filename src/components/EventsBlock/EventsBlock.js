import { Link } from 'react-router-dom'
import './EventsBlock.css'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import ValidForm from '../ValidForm/ValidForm'
import { eventsItem } from '../../dataFiles/NewsItem'
import useAuth from "../../hooks/AuthChecker";


export default function EventsBlock() {
    const { isAuth } = useAuth();
    const [modalActive, setModalActive] = useState(false)

    const colorClasses = [
        'events-list__item--blue',
        'events-list__item--pink',
        'events-list__item--green',
        'events-list__item--yellow',
        'events-list__item--purple',
        'events-list__item--orange'
    ];

    return(
        <main>
            <section className="info-block">
                <div className="container">
                    <div className="info-block__inner">
                        <div className="info-block__opendors">
                            <div className="info-block__opendoors-date">
                                <p className="opendoors-date__title">25</p>
                                <p className="opendoors-date__text">ноября</p>
                             </div>
                        <div className="info-block__opendoors-desc">
                            <p className="opendoors-desc__title">День открытых дверей </p>
                                <span className="opendoors-desc__text">Приглашаем всех желающих на бесплатную экскурсию
                                    в мир востребованных профессий и полезных навыков</span>
                        </div>

                    <Link className="info-block__opendoors-btn" onClick={() => setModalActive(true)}>Записаться</Link>
                    {isAuth ? (
              <Modal active={modalActive} setActive={setModalActive}>
                <p>Поздравляем, Вы записаны! Отслеживайте мероприятие в личном кабинете.</p>
              </Modal>
            ) : (
              <Modal active={modalActive} setActive={setModalActive}>
                <ValidForm />
              </Modal>
            )}
                </div>
            </div>
        </div>
    </section>
    <section className="events-block">
        <div className="container">
            <div className="events-block__inner">
               <ul className="events-list">
                {eventsItem.map((item, index)=> (
                    <Link key={index} 
                        className={`events-list__item ${colorClasses[index % colorClasses.length]}`}
                        onClick={() => setModalActive(true)}>
                        <p className="events-item__type">{item.type}</p>
                        <div className="events-item__cont">
                            <img className="events-item__img" src={item.img} alt="events icon"/>
                            <p className="events-item__title">{item.title}</p> 
                        </div>
                        <span className="events-item__text">{item.text}</span>
                        <p className="events-item__date">{item.date}</p>
                    </Link>
                     
                ))}
                {isAuth ? (
              <Modal active={modalActive} setActive={setModalActive}>
                <p>Поздравляем, Вы записаны! Отслеживайте мероприятие в личном кабинете.</p>
              </Modal>
            ) : (
                <Modal active={modalActive} setActive={setModalActive} >
                    <p className='modal-title'>Заполните форму для приглашения на мероприятие</p>
                     <ValidForm/>
                 </Modal>
            )}
               </ul>
            </div>
        </div>
    </section>
    </main>
    )
}