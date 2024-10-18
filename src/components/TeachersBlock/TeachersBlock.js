import './TeachersBLock.css'
import { teachersList } from '../../dataFiles/TeachersData'



export default function TeachersBlock() {

    const teachers = teachersList.slice(0,4)

    
    return(
        <section className="our-teachers">
        <div className="container">
          <div className="our-teachers__inner">
            <h1 className="our-teachers__title">Наши преподаватели</h1>
            <ul className="our-teachers__list">
                {teachers.map((item, index)=> (
                    <li key={index} className="our-teachers__item">
                    <img src={item.icon} alt="teacher-img" className="our-teachers__img"/>
                    <p className="our-teachers__name">{item.name}</p>
                    <span className="our-teachers__text">{item.description}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    )
}