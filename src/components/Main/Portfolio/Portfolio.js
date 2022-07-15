import React from 'react';
import './Portfolio.css';
import arrow from '../../../images/text__COLOR_font-main.svg';

function Portfolio() {
    return (
        <div className='portfolio'>
            <div className='portfolio__container'>
                <h4 className='portfolio__title'>Портфолио</h4>
                <div className='portfolio__box-item'>
                    <a href={'https://mesto2022.nomoredomains.xyz'} target='_blank' className='portfolio__link-project'>Одностраничное приложение "Mesto"</a>
                    <a href={'https://mesto2022.nomoredomains.xyz'} target='_blank' className='portfolio__link'><img src={arrow} alt="фото Качур Андрея" className='portfolio__arrow' /></a>
                </div>
                <div className='portfolio__line'></div>
                <div className='portfolio__box-item'>
                    <a href={'http://коротаева.рф'} target='_blank' className='portfolio__link-project'>Персональный сайт учителя</a>
                    <a href={'http://коротаева.рф'} target='_blank' className='portfolio__link'><img src={arrow} alt="фото Качур Андрея" className='portfolio__arrow' /></a>
                </div>
                <div className='portfolio__line'></div>
                <div className='portfolio__box-item'>
                    <a href={'https://ntx03.github.io/russian-travel'} target='_blank' className='portfolio__link-project'>Адаптивный сайт "Русское путешествие"</a>
                    <a href={'https://ntx03.github.io/russian-travel'} target='_blank' className='portfolio__link'><img src={arrow} alt="фото Качур Андрея" className='portfolio__arrow' /></a>
                </div>
                <div className='portfolio__line portfolio__line_last'></div>
                <div className='portfolio__box-item'>
                    <a href={'https://ntx03.github.io/how-to-learn'} target='_blank' className='portfolio__link-project'>Статичный сайт "Научиться учиться"</a>
                    <a href={'https://ntx03.github.io/how-to-learn'} target='_blank' className='portfolio__link'><img src={arrow} alt="фото Качур Андрея" className='portfolio__arrow' /></a>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;