import React from 'react';
import cicl from '../../assets/hero/cicl.svg';
import './index.scss';
import { useDispatch } from 'react-redux';
import { addToCart as addCart } from '../../redux/action/cart.js';

const Hero = ({img, title, text, price, oldPrice, id}) => {
    
    const newWatch = {
        id, 
        title,
        img,
        text,
        price,
        oldPrice,
    }
    const dispatch = useDispatch();
    
    const addToCart = () =>{
        dispatch(addCart(newWatch));
    }

    return (
        <div className='hero'>
            <img className='hero__watch col-6' src={img} alt="" />
            <div className='hero__left col-6'>
            <p className='hero__title'>{title}</p>
            <p className='hero__subtitle'>{text}</p>
            <a className='hero__discover' href="">Discover</a>
            <div className=' hero__row'>
            <button onClick={addToCart} className='hero__btn'><svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M21.3185 3.95208L18.7585 13.3388C18.7111 13.513 18.5593 13.6384 18.3794 13.6522L8.41454 14.4187L7.94341 15.3601H17.4935C17.7291 15.3601 17.9202 15.5512 17.9202 15.7868C17.9202 16.0225 17.7291 16.2135 17.4935 16.2135H7.2534C7.10552 16.2135 6.96816 16.137 6.8904 16.0112C6.81264 15.8854 6.80557 15.7283 6.8717 15.596L7.42211 14.4952L7.28557 14.5056L7.2534 14.5068C7.05747 14.5069 6.88664 14.3736 6.83919 14.1835L3.59504 1.16336C3.54305 0.979604 3.37513 0.8529 3.18416 0.853341H0.426671C0.191027 0.853341 0 0.662314 0 0.426671C0 0.191027 0.191027 0 0.426671 0H3.18416C3.76369 0.000889804 4.27074 0.390021 4.4215 0.949598L5.03736 3.4213C5.06462 3.41609 5.0923 3.41344 5.12005 3.41337H20.9069C21.0398 3.41338 21.1651 3.47535 21.2458 3.58098C21.3266 3.6866 21.3534 3.82381 21.3185 3.95208ZM9.38679 8.96006C9.38679 8.72441 9.57782 8.53338 9.81346 8.53338H11.9468V6.40003C11.9468 6.16439 12.1378 5.97336 12.3735 5.97336C12.6091 5.97336 12.8002 6.16439 12.8002 6.40003V8.53338H14.9335C15.1692 8.53338 15.3602 8.72441 15.3602 8.96006C15.3602 9.1957 15.1692 9.38673 14.9335 9.38673H12.8002V11.5201C12.8002 11.7557 12.6091 11.9467 12.3735 11.9467C12.1378 11.9467 11.9468 11.7557 11.9468 11.5201V9.38673H9.81346C9.57782 9.38673 9.38679 9.1957 9.38679 8.96006ZM5.24726 4.26672H20.3482L18.0138 12.8243L7.57979 13.6272L5.24726 4.26672ZM8.53344 17.0668C8.06215 17.0668 7.6801 17.4489 7.6801 17.9202C7.6801 18.3915 8.06215 18.7735 8.53344 18.7735C9.00473 18.7735 9.38678 18.3915 9.38678 17.9202C9.38678 17.4489 9.00473 17.0668 8.53344 17.0668ZM15.3602 17.9202C15.3602 17.4489 15.7423 17.0668 16.2135 17.0668C16.6848 17.0668 17.0669 17.4489 17.0669 17.9202C17.0669 18.3915 16.6848 18.7735 16.2135 18.7735C15.7423 18.7735 15.3602 18.3915 15.3602 17.9202Z" fill="white"/>
</svg>
Add to cart</button>
            <img className='hero__cicl' src={cicl} alt="" />
            </div>
        </div>
        </div>
        
       
    )
}

export default Hero;
