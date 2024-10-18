import './ProgramsItemBlock.css'
import programData from '../dataFiles/ProgramsData'

export default function ProgramsItemBlock() {
    return(
        <ul className="courses-block">
           { programData.map((item, index)=> (
            <li key={item.id} className="courses-block__item">
                <p key={`subtitle-${item.id}`} className="courses-block__type">{item.subtitle}</p>
                <p key={`title-${item.id}`} className="courses-block__title">«{item.title}»</p>
                <span key={`description-${item.id}`} className="courses-block__text">{item.description} </span>
                <p key={`term-${item.id}`} className="courses-block__period">{item.term}</p>
            </li>
           ))}
        </ul>
    )
}