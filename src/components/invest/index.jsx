import React from 'react';
import './index.scss';
import invest from '../../assets/invest/invest.png';
import invest1 from '../../assets/invest/invest1.png';
import invest2 from '../../assets/invest/invest2.png';
import invest3 from '../../assets/invest/invest3.png';
import invest4 from '../../assets/invest/invest4.png';
import invest5 from '../../assets/invest/invest5.png';
import invest6 from '../../assets/invest/invest6.png';
import invest7 from '../../assets/invest/invest7.png';
import invest8 from '../../assets/invest/invest8.png';
import invest9 from '../../assets/invest/invest9.png';

const Invest = () => {
    return (
        <div className='invest'>
        <div className=' container'>
            <div className='invest__up row'>
            <div className='invest__img'><img src={invest1} alt="" /></div>
            <div className='invest__img'><img src={invest2} alt="" /></div>
            <div className='invest__img'><img src={invest3} alt="" /></div>
            <div className='invest__img'><img src={invest4} alt="" /></div>
            <div className='invest__img'><img src={invest5} alt="" /></div>
            </div>
            <div className='invest__down row'>
            <div className='invest__img'><img src={invest6} alt="" /></div>
            <div className='invest__img'><img src={invest7} alt="" /></div>
            <div className='invest__img'><img src={invest8} alt="" /></div>
            <div className='invest__img'><img src={invest9} alt="" /></div>
            <div className='invest__img'><img src={invest} alt="" /></div>
            </div>
        </div>
        </div>
       
    )
}

export default Invest;
