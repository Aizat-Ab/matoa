import React from 'react';
import '../../components/home/index.scss';
import Search from '../../components/search';
import Cart from '../Cart';
import LogIn from '../logIn';

const Page = () => {
    return (
        <div className='home'>
            <Search/>
            <LogIn/>
            <Cart/>
        </div>
    )
}

export default Page
