import "./HeaderDescript.css";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/AuthChecker";
import ValidForm from "../ValidForm/ValidForm";

export default function HeaderDescript() {
  const { isAuth} = useAuth();
  const [modalActive, setModalActive] = useState(false);

  return (
    <section className="chess-preview">
      <div className="container">
        <div className="chess-preview__inner">
          <div className="chess-school">
            <h1 className="chess-school__title">Название курса</h1>
            <p className="chess-school__subtitle">Цель курса</p>
            <div className="chess-school__periods">
              <span className="chess-school__term"> Длительность курса </span>
              <span className="chess-school__mode">
                Режим занятий:
                <br />
                кол-во раз в неделю, срок
              </span>
            </div>
            <p className="chess-school__cost">от ХХХ бел.руб. в месяц</p>
            <p className="chess-school__ad">1 занятие бесплатное</p>
            <p className="chess-school__descr">
              Прежде чем начать обучение советуем записаться на пробное заниятие{" "}
            </p>
            <Link
              onClick={() => setModalActive(true)}
              className="chess-school__btn"
            >
              Записаться на пробное занятие
            </Link>

            {isAuth ? (
              <Modal active={modalActive} setActive={setModalActive}>
                <p>Поздравляем! Вы записаны на пробное занятие. Для уточнения даты
                и времени с Вами свяжется специалист.</p>
              </Modal>
            ) : (
              <Modal active={modalActive} setActive={setModalActive}>
                <ValidForm />
              </Modal>
            )}
          </div>
          <img
            src="../assets/chess-kid.png"
            alt="chess-kid"
            className="chess-preview__img"
          />
        </div>
      </div>
    </section>
  );
}
