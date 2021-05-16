import React from 'react';
import Cart from '../../pages/Cart';
import LogIn from '../../pages/logIn';
import Search from '../search';
import './index.scss';

const Home = () => {
    return (
        <div className='home'>
            <Search/>
            <LogIn/>
            <Cart/>
        </div>
    )
}

export default Home
