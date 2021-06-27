import React from 'react';
import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart  } from '../../redux/action/cart';

const Watches = ({id,name,price,imageUrl}) => {
    
    const dispatch = useDispatch();

    const back = {
        id,
        name,
        price,
        imageUrl
    }
    const add = ()=> {
        dispatch(addToCart(back))
    }
    return (
        <div className='watches row'>
            <img src={imageUrl} alt="" />
            <div className='watches__right'>
            <p className='watches__name'>{name}</p>
            <p className='watches__price'>Rp {price}</p>
            <button onClick ={ add } className='watches__add' >Add to cart</button>
            </div>
        </div>
    )
}
export default Watches;
