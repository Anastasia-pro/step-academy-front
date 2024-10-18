import './Footer/Footer.css'
import { categoryData, itemData } from './footerListData';
import { Link } from 'react-router-dom';


const getCategoryItems = (items, numItemsPerCategory) => Array.from({length: Math.ceil(items.length / numItemsPerCategory)},
                                                     (_, i) => items.slice(i * numItemsPerCategory, (i + 1) * numItemsPerCategory))

const renderList = (category, items, maxItems = 8) => (
  <ul key={category.id} className="footer-species__list">
    <p className="footer-species__list-title">{category.category}</p>
    {items.slice(0, maxItems).map(item => (
      <li key={item.id} className="footer-species__list-item">
        <Link to={item.link || '/course'} className="footer-species__list-link">{item.item}</Link>
      </li>
    ))}
  </ul>
);

const FooterList = () => {
  const categoryItems = getCategoryItems(itemData, 8);

  return (
    
    <div className="footer-inner">
      {categoryData.map((category, i) => renderList(category, categoryItems[i] || [], 8))}
    </div>);
};

export default FooterList;