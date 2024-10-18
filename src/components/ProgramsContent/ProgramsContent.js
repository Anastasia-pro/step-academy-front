import { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import ChooseCourse from "../ChooseCourse/ChooseCourse";
import HelpForm from "../HelpForm/HelpForm";
import useAuth from "../../hooks/AuthChecker";
import programData from "../../dataFiles/ProgramsData";
import "./ProgramsContent.css";
import Loading from "../Preloader/Preloader";

export default function ProgramsContent() {
  const {isAuth} = useAuth();
  const [rangeval, setRangeval] = useState(1);
  const [typeKeyword, setTypeKeyword] = useState("");
  const [spectrKeyword, setSpectrKeyword] = useState("");
  const [filteredItems, setFilteredItems] = useState(programData);

  const handleFilter = () => {
    const minDuration = parseInt(rangeval, 10);
    const filtered = programData.filter((item) => {
      if (typeKeyword === "любой") {
        // Если тип обучения "Любой", то фильтруем только по свойству term
        return item.term.includes(spectrKeyword) && (!isNaN(minDuration)? parseInt(item.term, 10) === minDuration : true)
      } else {
        // В противном случае фильтруем по всем условиям
        return (
          item.subtitle.toLowerCase().includes(typeKeyword.toLowerCase()) &&
          item.term.includes(spectrKeyword) &&
          (!isNaN(minDuration)? parseInt(item.term, 10) === minDuration : true)
        );
      }
    });
  
    setFilteredItems(filtered);
  };

  return (
    <main className="main">
      <div className="container">
        <h1 className="main-title">Все программы обучения</h1>
        
        <div className="main-inner">

          <section className="main-filters">
            <div className="container">
              <div className="main-filters__inner">
                <form className="main-filters__type">
                  <p className="main-filters__title">Тип обучения</p>
                  <div className="main-filters__item">
                    <div className="main-filters__item-block">
                      <input type="radio" name="learningType" id="another" value="любой" className="main-filters__check"
                        onChange={(e) => setTypeKeyword(e.target.value)} />
                      <label htmlFor="another" className="main-filters__label">Любой</label>
                    </div>
                    <div className="main-filters__item-block">
                      <input type="radio" name="learningType" id="profession" value="профессия" className="main-filters__check"
                        onChange={(e) => setTypeKeyword(e.target.value)} />
                      <label htmlFor="profession" className="main-filters__label">Профессия</label>
                    </div>
                    <div className="main-filters__item-block">
                      <input type="radio" name="learningType" id="course" value="курс" className="main-filters__check"
                        onChange={(e) => setTypeKeyword(e.target.value)} />
                      <label htmlFor="course" className="main-filters__label">Курс</label>
                    </div>
                  </div>
                </form>
                <form className="main-filters__spectr">
                  <p className="main-filters__title">Длительность</p>
                  <p className="main-filters__subtitle">от 1 до 24 месяцев</p>
                  <input type="range" name="filterPeriod" id="" min="1" max="24" step="1" value={rangeval}
                    className="main-filters__diapason"
                    onChange={(event) => setRangeval(event.target.value)} />
                  <p>The range value is {rangeval}</p>
                </form>
                <button type="submit" className="help-form__btn btn-filter" onClick={handleFilter}>Применить</button>
              </div>
            </div>
          </section>

          <section className="main-content">
            <div className="container">
              <div className="main-content__inner">
                <ChooseCourse/>
               {filteredItems.length > 0 ? (
                <ul className="courses-block">
                  <Suspense fallback={<Loading />}>
                   {filteredItems.map((item, index) => (
                     <Link to="/course" key={index} className="courses-block__item">
                        <p className="courses-block__type">{item.subtitle}</p>
                        <p className="courses-block__title">{item.title}</p>
                        <span className="courses-block__text">{item.description}</span>
                        <p className="courses-block__period">{item.term}</p>
                     </Link>
                    ))}
                    </Suspense>
                </ul>
                ) : (
                  <p>Нет совпадений</p>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
      {isAuth ? 
        (
            <></>
        ):
        (<HelpForm/>)}
    </main>
  );
}
