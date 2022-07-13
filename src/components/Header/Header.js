import './Header.css';
import React from 'react';
import logo from '../../images/smile_header.svg';
import button from '../../images/button_menu.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header({ onClick, errorloginAuthorize, errorRegisterEmail }) {
    const loggedIn = useSelector(state => state.loggin.loggin);
    const movie = useSelector(state => state.movie.movie);
    const movieSave = useSelector(state => state.movieSave.movieSave);
    return (
        <div className={loggedIn ? 'header_movie' : 'header'}>
            <div className='header__container'>
                <Link to='/'> <img src={logo} className={loggedIn ? 'header__logo_login' : 'header__logo'} alt='зеленый смайлик' /></Link>
                <div className='header__menu'>
                    <Link to='/signup' onClick={errorRegisterEmail} className={loggedIn ? 'header__menu-signup_none' : 'header__menu-signup'}>Регистрация</Link>
                    <Link to='/signin' onClick={errorloginAuthorize} className={loggedIn ? 'header__menu-signin_none' : 'header__menu-signin'}>Войти</Link>
                    <div className='header__menu-box'>
                        <Link to='/movies' className={loggedIn ? (movie ? 'header__movies' : 'header__movies_bold') : 'header__movies_none'}>Фильмы</Link>
                        <Link to='/saved-movies' className={loggedIn ? (movieSave ? 'header__movies-save' : 'header__movies-save_bold') : 'header__movies-save_none'}>Сохранённые фильмы</Link>
                    </div>
                </div>
                <Link to='/profile' className={loggedIn ? 'header__account' : 'header__account_none'}>Аккаунт</Link>
                <button className={loggedIn ? 'header__button' : 'header__button_none'}><img className={loggedIn ? 'header__button-image' : 'header__button_none'} onClick={onClick} src={button} alt='кнопка открытия меню' /></button>
            </div>
        </div >
    );
}

export default Header;