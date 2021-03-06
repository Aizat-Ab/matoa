import React from 'react';
import { useDispatch } from 'react-redux';
import '../monthly/index.scss';
import {addToCart} from  '../../redux/action/cart.js'

const Watch = ({name, imageUrl, price, oldPrice, id}) => {
    const dispatch = useDispatch()
    const monthly = {
        id,
        name,
        imageUrl,
        price,
        oldPrice,
        imageUrl
    }
    const addToCarts = () => {
        dispatch(addToCart(monthly))
    }
    return (
        <div className='monthly__box'>
                <img src={imageUrl} alt="" />
                <p className='monthly__name'>{name}</p>
                <p className='monthly__share'>20% Off</p>
                <p className='monthly__old-price'>Rp {oldPrice}</p>
                <span className='monthly__new-price'>Rp {price}</span>
                <div className='monthly__button'>
                <button className='monthly__like'>
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0036 2.6792C10.9066 1.6216 12.6428 0 14.8 0C17.9103 0 20 2.25056 20 5.6C20 11.574 10.9772 17.7803 10.4636 18.1336L10.4536 18.1405L9.9976 18.4L9.5432 18.0838C9.53815 18.0802 9.53163 18.0757 9.52367 18.0702C8.91773 17.6504 0 11.4725 0 5.6C0 2.25056 2.08968 0 5.2 0C7.37992 0 9.10728 1.62008 10.0036 2.6792ZM0.799967 5.59997C0.799967 11.2 9.99997 17.427 9.99997 17.427V17.4271C9.99997 17.4271 19.2 11.2668 19.2 5.59997C19.2 2.79997 17.6 0.799967 14.8 0.799967C12.0666 0.799967 9.99997 3.99997 9.99997 3.99997C9.99997 3.99997 7.96661 0.799967 5.19997 0.799967C2.39997 0.799967 0.799967 2.79997 0.799967 5.59997Z" fill="#D84727"/>
</svg>
                </button>
                <button onClick={addToCarts} className='monthly__add'>Add to cart</button>
                </div>
            </div>
    )
}

export default Watch;
