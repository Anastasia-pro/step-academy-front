import './NewsItemBlock.css';
import { newsItem } from '../../dataFiles/NewsItem';
import { Link } from 'react-router-dom';

export default function NewsItemBlock() {
  return (
    <main className="main">
      <section className="all-news">
        <div className="container">
          <div className="all-news__inner">
            <h1 className="all-news__title">Новости ХОД Future Academy</h1>
            <ul className="all-news__list">
              {newsItem.map((item) => (
                <li key={item.id} className="all-news__item">
                  <img src={item.pic} alt="news-img" className="all-news__img" />
                  <div className="all-news__descr">
                    <p className="all-news__name">{item.title}</p>
                    <span className="all-news__text">{item.description}</span>
                    <Link to={`/newspage/${item.id}`} className="all-news__btn">
                      {item.link}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
