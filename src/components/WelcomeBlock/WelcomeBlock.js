
import welcomeData from "../../dataFiles/WelcomeData"
import './WelcomeBlock.css'

export default function WelcomeBlock() {
  return (
    <section className="welcome-block">
      <div className="container">
        <div className="welcome-block__inner">
          <p className="wecome-block__title">Добро пожаловать в Академию будущего ХОД!</p>
          <ul className="welcome-block__list">
            {welcomeData.map((item, index) => (
              <li className="welcome-block__item" key={index}>
                <img src={item.icon} alt="tech-img"  className="welcome-block__img" />
                <span  className="welcome-block__text">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}