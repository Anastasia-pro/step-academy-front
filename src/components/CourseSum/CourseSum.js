import { Link } from 'react-router-dom'
import './CourseSum.css'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import ValidForm from '../ValidForm/ValidForm'

export default function CourseSum() {

  const [modalActive, setModalActive] = useState(false)

    return (
        <section className="course-content">
        <div className="container">
          <div className="course-content__inner">
            <h1 className="course-content__title">Содержание курса</h1>
            <span className="course-content__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatum porro est expedita minima, incidunt cum fugiat, deserunt eveniet eligendi dignissimos ex iure quae.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum porro est expedita minima, incidunt cum fugiat, 
            deserunt eveniet eligendi dignissimos ex iure quae.
            </span>
            <div className="course-content__period">
              <span className="course-content__term"> Длительность курса </span>
              <span className="course-content__mode">
                Режим занятий:<br />
                кол-во раз в неделю, срок
              </span>
            </div>
            <p className="course-content__cost">от ХХХ бел.руб. в месяц</p>
            <Link onClick={() => setModalActive(true)} className="course-content__btn">Записаться на курс</Link>
            <Modal active={modalActive} setActive={setModalActive}>
                       <ValidForm/>
              </Modal>
          </div>
        </div>
      </section>
    )
}