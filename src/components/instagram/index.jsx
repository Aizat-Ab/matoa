import React from 'react';
import './index.scss';
import rectangle1 from '../../assets/instagram/Rectangle1.png';
import rectangle2 from '../../assets/instagram/Rectangle2.png';
import rectangle3 from '../../assets/instagram/Rectangle3.png';
import rectangle4 from '../../assets/instagram/Rectangle4.png';
import rectangle5 from '../../assets/instagram/Rectangle5.png';

const Instagram = () => {
    return (
        <div className='instagram'>
            <a className='instagram__link'>Instagram</a>
            <div className='instagram__img'>
                <img src={rectangle1} alt="" />
                <img src={rectangle2} alt="" />
                <img src={rectangle3} alt="" />
                <img src={rectangle4} alt="" />
                <img src={rectangle5} alt="" />
            </div>
        </div>
    )
}

export default Instagram;
