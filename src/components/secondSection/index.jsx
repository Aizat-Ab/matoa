import React from 'react';
import './index.scss';
import img1 from '../../assets/section/watch.png';
import img2 from '../../assets/section/glasses.png';

const SecondSection = () => {
    return (
        <div className='second row'>
            <div className='second__box'>
                <p className='second__title'>Luxurious <span>Eyewear</span> </p>
                <p className='second__text'>See the beauty of exotic world with the luxurious glasses</p>
                <a className='second__a' href="">Discover Now</a>
                <img className='second__img' src={img1} alt="" />
            </div>
            <div className='second__box'>
                <p className='second__title'>Comfortable <span>Watches</span> </p>
                <p className='second__text'>Feels the balancing function and beauty in our wooden watches</p>
                <a className='second__a' href="">Discover Now</a>
                <img className='second__img1' src={img2} alt="" />
            </div>
        </div>
    )
}

export default SecondSection;
