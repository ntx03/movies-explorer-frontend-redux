import React from 'react';
import Header from '../Header/Header';
import './Profile.css';
import ProfileSection from './ProfileSection/ProfileSection';

function Profile({ loggedIn, workButton, onClick, logOut, updateUser, errorUpdate, errorEmailUpdate, setErrorUpdate, userName, setUserName, email, setEmail, name, setName }) {
    return (
        <section className='profile-section'>
            <Header loggedIn={loggedIn} onClick={onClick} />
            <ProfileSection
                logOut={logOut}
                updateUser={updateUser}
                errorUpdate={errorUpdate}
                errorEmailUpdate={errorEmailUpdate}
                setErrorUpdate={setErrorUpdate}
                userName={userName}
                setUserName={setUserName}
                setEmail={setEmail}
                email={email}
                name={name}
                setName={setName}
                workButton={workButton} />
        </section>
    )
}

export default Profile;