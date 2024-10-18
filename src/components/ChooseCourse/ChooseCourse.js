import React, { useState } from 'react'
import './ChooseCourse.css'
import { ageData } from '../../dataFiles/ChooseCourseData'
import { itemData } from '../../dataFiles/footerListData'
import { Link } from 'react-router-dom'


export default function ChooseCourse(props) {
  const [selectedAge, setSelectedAge] = useState(0)

  const handleClick = (index) => {
    setSelectedAge(index)
  }

  return (
    <section className="choose-course">
      <div className="container">
        <div className="choose-course__inner">
          {props.childComponent}
          <div className="choose-course__block">
          <ul className="choose-course__block-list">
            {ageData.map((item, index) => (
              <li
                className={`choose-course__block-item ${item.classes.join(' ')}`}
                onClick={() => handleClick(index)}
                key={item.id} >
                <p className={'choose-course__block-title'}>{item.ageTitle}</p>
                <span className="choose-course__block-text">{item.age}</span>
              </li> 
            ))}
          </ul>
            <ul className="choose-course__block-types">
              {itemData.slice(selectedAge * 8, (selectedAge + 1) * 8).map((item) => (
                  <li className="choose-course__types-item" key={item.id}>
                  <Link to='/course' className="choose-course__block-link">
                    {item.item}
                    </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}