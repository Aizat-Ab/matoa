import React from 'react';
// import Sliders from 'react-slick';
import Cart from '../../pages/Cart';
import LogIn from '../../pages/logIn';
import Sliders from '../hero-slider';
import Search from '../search';
import './index.scss';

const Home = () => {
    return (
        <div>
            <div className='home'>
            <Search/>
            <LogIn/>
            <Cart/>
        </div>
        </div>
    )
}

export default Home
