import './CourseReg.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import ValidForm from '../ValidForm/ValidForm'

export default function  CourseReg(){

  const [modalActive, setModalActive] = useState(false)

    return (
        <section className="chess-sign">
        <div className="container">
          <div className="chess-sign__inner">
            <div className="chess-sign__text">
              <span className="chess-sign__rec">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Voluptatum porro est expedita minima, incidunt cum fugiat, deserunt eveniet eligendi dignissimos ex iure quae.<br/>
              </span>
              <span className="chess-sign__rec">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Voluptatum porro est expedita minima, incidunt cum fugiat, deserunt eveniet eligendi dignissimos ex iure quae.<br/>
              </span>
            </div>
            <Link onClick={() => setModalActive(true)} className="chess-sign__btn">Записаться на курс</Link>
            <Modal active={modalActive} setActive={setModalActive}>
                        <ValidForm/>
              </Modal>
          </div>
        </div>
      </section>
    )

}