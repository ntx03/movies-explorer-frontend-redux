import React from 'react';
import './ProfileSection.css';
import { useState, useEffect } from "react";
import CurrentUserContext from '../../../contexts/currentUserContext';
import { useSelector } from 'react-redux';

function ProfileSection({ logOut, workButton, updateUser, errorUpdate, errorEmailUpdate, setErrorUpdate, userName, setUserName, email, setEmail, name, setName }) {
    const user = React.useContext(CurrentUserContext);

    // записываем инпут email при отправке submit или при нажатии на кнопку редактировать
    const [changeEmail, setChangeEmail] = useState('');

    // записываем инпут name при нажатии на кнопку редактировать
    const [changeName, setChangeName] = useState('');

    // емайл пользователя
    const [emailValidate, setEmailValidate] = useState(true);

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailValidate(false);
        } else { setEmailValidate(true); }
    }


    const [nameValidate, setNameValidate] = useState(true);
    const onChangeName = (e) => {
        setName(e.target.value)
        if (e.target.value.length < 2) {
            setNameValidate(false);
        } else {
            setNameValidate(true);
        }
    }

    const [validate, setValidate] = useState(false);
    React.useEffect(() => {
        if (!emailValidate || !nameValidate) {
            setValidate(false);
        } else { setValidate(true); }
    }, [emailValidate, nameValidate])

    // обновление профиля
    const update = (e) => {
        e.preventDefault();
        updateUser(name, email);
    }

    // управление кнопкой редактирования профиля
    const saveFrofileButton = (e) => {
        e.preventDefault();
        workButton();
        setChangeName(name);
        setChangeEmail(email);
        setValidate(false);
    }

    // подгрузка данных о себе
    useEffect(() => {
        setEmail(user.email);
        setName(user.name);
        setUserName(user.name);
        setErrorUpdate(false);
    }, [])

    // сброс disabled с кнопки сохранить
    useEffect(() => {
        if (changeEmail !== email || changeName !== name) {
            setErrorUpdate(false);
            setValidate(true);
        } else setValidate(false);
    }, [email, name]);

    const button = useSelector(state => state.button.button);

    return (
        <section className='profile'>
            <form className='profile__container' onSubmit={update}>
                <h2 className='profile__title'>{`Привет, ${userName}!`}</h2>
                <div className='profile__box'>
                    <p className='profile__input-name'>Имя</p>
                    <input type="text" disabled={!button} className={nameValidate ? 'profile__input' : 'profile__input-error'} required value={name || ''} onChange={onChangeName} placeholder='Имя' />
                </div>
                <div className='profile__line'></div>
                <div className='profile__box'>
                    <p className='profile__input-name'>E-mail</p>
                    <input type="email" disabled={!button} className={emailValidate ? 'profile__input' : 'profile__input-error'} required value={email || ''} onChange={onChangeEmail} placeholder='Email' />
                </div>
                <p className={errorUpdate ? 'profile__edit-error' : 'profile__edit-error_none'}>{errorEmailUpdate ? 'Пользователь с таким email уже существует.' : 'При обновлении профиля произошла ошибка.'}</p>
                <button className={button ? 'profile__edit_none' : 'profile__edit'} onClick={saveFrofileButton}>Редактировать</button>
                <button onClick={logOut} className={button ? 'profile__exit_none' : 'profile__exit'}>Выйти из аккаунта</button>
                <button disabled={errorUpdate || !validate} className={button ? ((errorUpdate || !validate) ? 'profile__button-disable' : 'profile__button') : 'profile__button_none'}>Сохранить</button>
            </form>
        </section>
    );
}

export default ProfileSection;