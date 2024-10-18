import './NumbersBlock.css'
import { numbersData } from '../../dataFiles/NumbersBlockData'

export default function NumbersBlock() {
    return(
        <section className="our-counts">
        <div className="container">
            <div className="our-counts__inner">
                <p className="our-counts__title">Актуальные знания от признанных экспертов рынка
                    для новичков и практикующих специалистов.
                </p>
                <ul className="our-counts__list">
                    {numbersData.map((num)=> (
                        <li key={num.id} className="our-counts__item">
                            <p className="our-counts__num">{num.number}</p>
                            <span className="our-counts__text">{num.numText}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
    )
}