import './PersonalPage.css'
import { useState } from 'react';
import PersonalStudy from '../PersonalStudy/PersonalStudy'
import PersonalNotify from '../PersonalNotify/PersonalNotify';
import PersonalEvents from '../PersonalEvents/PersonalEvents';

export default function PersonalPage () {

    const [activeTab, setActiveTab] = useState('default');

    const renderContent = () => {
        switch(activeTab) {
            case 'study':
                return <PersonalStudy />;
            case 'notify':
                return <PersonalNotify />;
            case 'events':
                return <PersonalEvents />;
            default:
                return <div/>;
        }
    }

    return(
        
        <section className='person-block'>
            <div className='container'>
                <div className='person-inner'>
                    <nav className="person-nav">
                        <ul className="person-nav__list">
                            <li className="person-nav__list-item">
                                <button onClick={() => setActiveTab('study')} className="person-nav__list-link">Моё обучение</button>
                            </li>
                            <li className="person-nav__list-item">
                                <button onClick={() => setActiveTab('notify')} className="person-nav__list-link">Уведомления</button>
                            </li>
                            <li className="person-nav__list-item">
                                <button onClick={() => setActiveTab('events')} className="person-nav__list-link">Мои мероприятия</button>
                            </li>
                        </ul>
                    </nav>
                <div className='person-inner__content'>
                    {renderContent()}
                </div>

                </div>
            </div>
        </section>
        
    )
}