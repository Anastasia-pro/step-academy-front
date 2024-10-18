
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { testContent } from '../../dataFiles/TestData';
import './TestContent.css'

export default function TestContent() {
  const [selected, setSelected] = useState(Array(testContent.length).fill(null));
  const [modalActive, setModalActive] = useState(false);
  const [allSelected, setAllSelected] = useState(false);

  const handleChange = (questionIndex, value) => {
    setSelected((prevSelected) => {
      const newSelected = [...prevSelected];
      newSelected[questionIndex] = value;
      setAllSelected(newSelected.every((item) => item !== null));
      return newSelected;
    });
  };

  const resetRadioInputs = () => {
    setSelected(Array(testContent.length).fill(null));
  };

  return (
    <section className='test-block'>
      <div className="container">
        <div className="test-block__inner">
          <h1 className="test-block__title">Ответьте на простые вопросы, и точно определитесь с нужным направлением!</h1>
          <ul className="test-block__list">
            {testContent.map((item, index) => (
              <li key={index} className="test-block__item">
                <form action="">
                  <p className="test-block__quest">{item.question}</p>
                  <div className='test-block__radio'>
                    <input
                      type='radio'
                      name={`question-${index}`}
                      value={0}
                      onChange={() => handleChange(index, 0)}
                      checked={selected[index] === 0}
                    />
                    <label
                      htmlFor={`question-${index}-0`}
                      onClick={() => handleChange(index, 0)}
                    >
                      {item.var1}
                    </label>
                  </div>
                  <div className='test-block__radio'>
                    <input
                      type='radio'
                      name={`question-${index}`}
                      value={1}
                      onChange={() => handleChange(index, 1)}
                      checked={selected[index] === 1}
                    />
                    <label
                      htmlFor={`question-${index}-1`}
                      onClick={() => handleChange(index, 1)}
                    >
                      {item.var2}
                    </label>
                  </div>
                  <div className='test-block__radio'>
                    <input
                      type='radio'
                      name={`question-${index}`}
                      value={2}
                      onChange={() => handleChange(index, 2)}
                      checked={selected[index] === 2}
                    />
                    <label
                      htmlFor={`question-${index}-2`}
                      onClick={() => handleChange(index, 2)}
                    >
                      {item.var3}
                    </label>
                  </div>
                </form>
              </li>
            ))}
            <button
              className='test-block__btn'
              onClick={() => {
                resetRadioInputs();
                setModalActive(true);
              }}
              type='submit'
              disabled={!allSelected}
            >
              Отправить
            </button>
            <Modal active={modalActive} setActive={setModalActive}>
              <p>Ваши ответы записаны! Ожидайте звонка от специалиста!</p>
            </Modal>
          </ul>
        </div>
      </div>
    </section>
  );
}
