import './NewsTextPage.css'
import { useParams } from 'react-router-dom';
import { newsText } from '../../dataFiles/NewsItem';

export default function NewsTextPage() {
  const { id } = useParams();
  const newsItem = newsText.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return <div>Новость не найдена</div>;
  }

  return (
    <main className="main">
      <section className="news-text__block">
        <div className="container">
          <div className="news-text__block-inner">
            <h1 className="news-text__block-title">{newsItem.title}</h1>
            <p className="news-text__block-date">{newsItem.date}</p>
            <span className="news-text__block-descr">{newsItem.subtext}</span>
            <img src={newsItem.pic} alt="news" className="news-text__block-img" />
            <span className="news-text__block-descr">{newsItem.text}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
