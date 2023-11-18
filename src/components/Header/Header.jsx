import React from 'react';
import './Header.css';
import profile from '../../assets/profile.png';

const Header = () => {
    return (
        <header>
            <div className='flex justify-between py-3 items-center'>
                <h1 className='text-3xl font-bold'>Geek Study Hub</h1>
                <img src={profile} alt="" />
            </div>
            <hr />
        </header>
    );
};

export default Header;