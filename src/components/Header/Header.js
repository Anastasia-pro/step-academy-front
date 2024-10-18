import { Link } from "react-router-dom";
import "./Header.css";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import useAuth from "../../hooks/AuthChecker";

  export default function Header() {
    const { isAuth, isCheckingAuth, userName, onClickLogout } = useAuth();
    const [modalActive, setModalActive] = useState(false);
    const [navActive, setNavActive] = useState(false);
  
    function toggleHandler(e) {
      e.preventDefault();
      setNavActive(!navActive);
    }

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to="/">
            <img
              src="/assets/logo-dark.svg"
              alt="header-logo"
              className="header-logo"
            />
          </Link>

          <nav
            className={navActive ? "header-nav" : "header-nav live"}
            id="menu"
          >
            <ul className="header-nav__list">
              <li className="header-nav__item">
                <Link to="/programs" className="header-nav__link">
                  {" "}
                  Все курсы
                </Link>
              </li>
              <li className="header-nav__item">
                <Link to="/events" className="header-nav__link">
                  Мероприятия
                </Link>
              </li>
              <li className="header-nav__item">
                <Link
                  onClick={() => setModalActive(true)}
                  className="header-nav__link"
                >
                  Базы знаний
                </Link>
              </li>
              <Modal active={modalActive} setActive={setModalActive}>
                <p>Page under construction. Please, try later.</p>
              </Modal>
              <li className="header-nav__item">
                <Link to="/career" className="header-nav__link">
                  Карьера
                </Link>
              </li>
              <li className="header-nav__item">
                <a href="tel:88009503398" className="header-nav__link">
                  +375 (25) 950-33-98{" "}
                </a>
              </li>
              {isCheckingAuth ? (
                <></>
              ) : isAuth ? (
                <li className="header-nav__item header-nav__logout">
                  <Link
                    to="/"
                    className="header-nav__link"
                    onClick={onClickLogout}
                  >
                    Выход
                  </Link>
                </li>
              ) : (
                <>
                  <li className="header-nav__item header-nav__login">
                    <Link to="/login" className="header-nav__link">
                      Вход
                    </Link>
                  </li>
                  <li className="header-nav__item header-nav__register">
                    <Link to="/reg" className="header-nav__link">
                      Регистрация
                    </Link>
                  </li>
                </>
              )}
              {isAuth && (
                <li className="header-nav__item header-nav__logout">
                  <Link to="/me" className="header-nav__link">
                    {userName}{" "}
                  </Link>
                </li>
              )}
            </ul>
          </nav>
          <div className="burger" id="burger" onClick={toggleHandler}></div>
        </div>
      </div>
</header>
    )}