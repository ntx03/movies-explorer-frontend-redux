import React from 'react';
import './AboutMe.css';
import Kachur from '../../../images/Kachur.jpg';

function AboutMe() {

    return (
        <div className='about-me' id='aboutMe'>
            <div className='about-me__box'>
                <div className='about-me__title'>Студент</div>
                <div className='about-me__title-line'></div>
                <div className='about-me__container'>
                    <div className='about-me__resume'>
                        <h3 className='about-me__resume-title'>Андрей Качур</h3>
                        <h2 className='about-me__profession'>фронтенд-разработчик, 35 лет</h2>
                        <p className='about-me__text'>Здравствуйте! Я родился и живу в городе Тюмени. У меня есть жена и двое детей. Закончил в 2008 году Тюменский нефтегазовый университет. Работал в Транснефть-Сибири инженером на нефтеперекачивающих станциях. C ранних лет интересуюсь всем, что связано с ПК. В прошлом году решился научиться web разработке. Освоил технологии React, node.JS, express.js,  mongoDB, Git, ООП, JS, CSS, HTML. За время обучение написал несколько работ на React и на обычном HTML, CSS. Примеры работ приведены ниже по ссылкам. В настоящее время активно продолжаю обучение. Буду рад сотрудничеству!</p>
                        <div className='about-me__link-container'>
                            <a href="https://www.facebook.com/profile.php?id=100000369908392" target='_blank' className='about-me__link'>Facebook</a>
                            <a href="https://github.com/ntx03" target='_blank' className='about-me__link'>Github</a>
                        </div>
                    </div>
                    <img src={Kachur} alt="фото Качур Андрея" className='about-me__photo' />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;