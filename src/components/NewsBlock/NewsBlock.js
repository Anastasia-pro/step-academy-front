import { Link } from 'react-router-dom'
import './NewsBlock.css'
import Modal from '../Modal/Modal'
import { useState } from 'react'
import ValidForm from '../ValidForm/ValidForm'
import useAuth from "../../hooks/AuthChecker";



export default function NewsBlock() {
    const { isAuth} = useAuth();
    const [modalActive, setModalActive] = useState(false)

    return(
        <>
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
    <section className="news-block">
        <div className="container">
            <div className="news-block__inner">
                <div className="news-block__progs">
                    <img src="../assets/monitor-img.svg" alt="programm-img" className="news-block__progs__img"/>
                    <p className="news-block__progs-title news-title">Программы обучения</p>
                    <span className="news-block__progs-text">В списке наших курсов вы сможете найти профессию и занятие по
                        душе, изучить новое и получить практические знания, которые помогут получить работу
                        мечты.
                    </span>
                    <Link to='/programs' className="news-block__progs-btn">Подробнее</Link>
                </div>
                <div className="news-block__compain">
                    <Link to='/news' className="news-block__papers">
                        <img src="../assets/newspaper-img.svg" alt="news-img" className="news-block__papers-img"/>
                        <p className="news-block__papers-title news-title">Новости Академии</p>
                    </Link> 
                    <Link to='/news' className="news-block__it">
                        <img src="../assets/diagram-img.svg" alt="news-it" className="news-block__it-img"/>
                        <p className="news-block__it-title news-title">Мир IT</p>
                    </Link>

                    <Link to='/test' className="news-block__try">
                        <p className="news-block__try-title news-title">Попробуй!</p>
                        <span className="news-block__try-text">Пройдите тест и узнайте, какое направление наиболее подходящее для Вас!
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}