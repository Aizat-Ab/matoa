import React from 'react';
import '../../components/home/index.scss';
import Search from '../../components/search';
import Carted from '../Cart';
import LogIn from '../logIn';

const Page = () => {
    return (
        <div className='home'>
            <Search/>
            <LogIn/>
            <Carted/>
        </div>
    )
}

export default Page
