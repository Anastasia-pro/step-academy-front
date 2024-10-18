import footerSocial from "./footerSocialList";
import './Footer/Footer.css';
const link = '#'

export default function FooterSocial() {
    const pictures = footerSocial.map((item)=> item.img)
    return (
        <ul className="footer-social">
        <li className="footer-social__item">
            <a href={link} className="footer-social__link">
                <img src={pictures} alt="vk" className="footer-social__img"/></a>
        </li>
        </ul>
    )
}
