import React from 'react';
import './index.scss';
import a from '../../assets/a.png';


const Watches = ({name,price,imageUrl}) => {
    return (
        <div className='watches row'>
            <img src={imageUrl} alt="" />
            <div className='watches__right'>
            <p className='watches__name'>{name}</p>
            <p className='watches__price'>Rp {price}</p>
            </div>
        </div>
    )
}

export default Watches
