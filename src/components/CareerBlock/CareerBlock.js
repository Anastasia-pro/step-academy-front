
import './CareerBlock.css'
import {vacDescData } from '../../dataFiles/CareerData' 

export default function CareerBlock() {
return (
    <section className="vacancies">
      <div className='container'>
        <div className="vacancies-inner">
          <h1 className="vacancies-title">Вакансии</h1>
          <h2 className="vacancies-subtitle">Станьте частью команды ХОД Future Akademy!</h2>

          <section>
           <ul className="vac-block__list">
              {vacDescData.map((item, index) => (
                <details key={index} className="vac-block__item">
                  <summary className="vac-block__link">{item.vacTitle}</summary>
                  <span className="vac-block__descr">{item.vacDesc}</span>
                </details>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}
