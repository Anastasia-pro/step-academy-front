import './FaqBlock.css'
import { faq } from '../../dataFiles/FaqData'

export default function FaqBlock() {
    return(
        <section className="faq-block">
        <div className="container">
          <div className="faq-block__inner">
            <h1 className="faq-block__title">Найдите ответ на свой вопрос</h1>
            {faq.map((item, index)=>(
                 <details key={index} className="faq-block__questions">
                 <summary className="faq-block__questions-title">{item.title}</summary>
                 <span className="faq-block__question-text">{item.text}</span>
               </details>
            ))}
          </div>
        </div>
      </section>
    )
}