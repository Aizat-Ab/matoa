import React from 'react';
import './index.scss';
import recent from '../../assets/recent.png';

const Recent = () => {
    return (
        <div className='recent row'>
            <div className='recent__left'>
            <p className='recent__title'>Recent News</p>
                <p className='recent__suptitle'>Where To Travel</p>
                <p className='recent__text'>Matoa Where To Travel? Yogyakarta</p>
                <button className='recent__btn'>Discover</button>
            </div>
            <div className='recent__right'>
                <img className='recent__img' src={recent} alt="" />
            </div>
        </div>
    )
}

export default Recent
