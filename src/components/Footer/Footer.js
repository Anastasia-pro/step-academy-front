import { Link } from 'react-router-dom';
import FooterList from '../FooterList.js';
import footerSocial from '../../dataFiles/footerSocialList.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-contacts">
            <Link to="/">
              <img src="/assets/logo-light.svg" alt="footer-logo" className="footer-logo" />
            </Link>
            <a href="tel:88009503398" className="footer-inner__contacts-tel"> +375 (25) 950-33-98 </a>
            <p className="footer-adress">г. Минск, ул. Ленина, д. 50</p>
            <a href="mailto:info@hodfutureacademy.by" className="footer-email"> info@hodfutureacademy.by </a>
            <ul className="footer-social">
              {footerSocial.map((item, index) => (
                <li key={index} className="footer-social__item">
                  <Link to={item.link} className="footer-social__link">
                    <img src={item.icon} alt={item.alt} className="footer-social__img" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="footer-rights">© ХОД, Future Academy</p>
          </div>
          <FooterList />
        </div>
      </div>
    </footer>
  );
}