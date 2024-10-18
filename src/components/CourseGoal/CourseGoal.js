import './CourseGoal.css'
import { goals } from '../../dataFiles/GoalsData'

export  default function CourseGoal() {
    const limitedGoals = goals.slice(0, 4);
    return(
    <section className="chess-goals">
        <div className="container">
            <ul className="chess-goals__list">
            {limitedGoals.map((goal, index)=> (
                <li key={index} className="chess-goals__item">
                <img src={goal.icon} alt="chess-img" className="chess-goals__img" />
                <p className="chess-goals__list-title">{goal.title}</p>
                <span className="chess-goals__list-text">{goal.text}</span>
              </li>
            ))}
            </ul>
        </div>
    </section>
)
}