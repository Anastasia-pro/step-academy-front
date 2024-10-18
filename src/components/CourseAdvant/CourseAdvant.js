
import { advantages } from '../../dataFiles/AdvantagesList'
import './CourseAdvant.css'



export default function CourseAdvant() {
    return(
        <section className="chess-advantages">
        <div className="container">
          <div className="chess-advantages__inner">
            <h1 className="chess-advantages__title">Название курса</h1>
            <span className="chess-advantages__descr" >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum porro est expedita minima, incidunt cum fugiat, deserunt eveniet eligendi dignissimos ex
             iure quae. Magnam totam tempore cupiditate fugit alias id.Voluptatum porro est expedita minima,
              incidunt cum fugiat, deserunt eveniet eligendidignissimos ex iure quae. 
              Magnam totam tempore cupiditate fugitalias id.
            </span>
            <ul className="chess-advantages__list">
                {advantages.map((item,index)=>(
                     <li key={index} className="chess-advantages__item">
                        <img src={item.icon} alt="chess-advantage" className="chess-advantages__img"/>
                        <p className="chess-advantages__type">{item.text}</p>
                   </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    )
}