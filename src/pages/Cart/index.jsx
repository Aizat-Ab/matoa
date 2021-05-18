import React from 'react';
import './index.scss';

const Cart = () => {
    const [activeCart, setActiveCart] = React.useState(false);


    return (
        <div className='cart'>
<svg onClick={()=>setActiveCart(true)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.2909 3.84C19.8035 3.83988 20.2257 4.24237 20.2501 4.7543L21.1188 22.9943C21.1313 23.2566 21.0358 23.5125 20.8546 23.7025C20.6734 23.8925 20.4223 24 20.1597 24H4.79974C4.53726 23.9999 4.28627 23.8923 4.10518 23.7023C3.92408 23.5123 3.82868 23.2565 3.84118 22.9943L4.70979 4.7543C4.73418 4.24241 5.15635 3.83993 5.66883 3.84H8.68639C8.68639 1.71923 10.4056 0 12.5264 0C14.6472 0 16.3664 1.71923 16.3664 3.84H19.2909ZM15.4064 3.84C15.4046 2.25017 14.1162 0.961799 12.5264 0.96C10.9366 0.961799 9.64819 2.25017 9.64639 3.84H15.4064ZM5.66883 4.8H8.6864V8.16C8.6864 8.4251 8.90131 8.64 9.1664 8.64C9.4315 8.64 9.6464 8.4251 9.6464 8.16V4.8H15.4064V8.16C15.4064 8.4251 15.6213 8.64 15.8864 8.64C16.1515 8.64 16.3664 8.4251 16.3664 8.16V4.8H19.2799L19.9744 19.2H4.98311L5.66883 4.8ZM4.93693 20.16L4.79974 23.04H20.1597L20.0206 20.16H4.93693Z" fill="#333333"/>
</svg>
        
        
        
        <div className={
            activeCart ? 'modall active' : 'modall'
        } onClick={()=> setActiveCart(false)}>
        <div onClick={e => e.stopPropagation()} className='cart__wrapper'>
            <div className='cart__border'>
            <div className='cart__left'>
                <img className='cart__image' src="" alt="" />
                <div className='cart__description'>
                    <p className='cart__name'>Way Kambas Mini Ebony</p>
                    <p className='cart__old-price'>Rp 1.280.000</p>
                    <p className='cart__new-price'>Rp 1.024.000</p>
                    <p className='cart__custom'>Custom Engrave</p>
                    <p className='cart__text'>“Happy | Birthday | from”</p>
                </div>
            </div>
            <div className='cart__right'>
                <p className='cart__select'>Select Packaging</p>
                <label>
                    <input className='cart__input' type="text" />
                </label>
                <div className='cart__btns'>
                <button className='cart__btn'>-</button>
                <span className='cart__volume'>кол-во</span>
                <button className='cart__btn'>+</button>
                <span className='cart__price'>Rp</span>
                <button className='cart__delete'>
                <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6972 2.29715H12.0601L11.7033 0.870009C11.5755 0.358703 11.1161 5.13325e-06 10.589 0H5.49104C4.964 5.13325e-06 4.50459 0.358703 4.37677 0.870009L4.02002 2.29715H0.382859C0.171412 2.29715 0 2.46857 0 2.68001C0 2.89146 0.171412 3.06287 0.382859 3.06287H1.56972L2.28069 17.2866C2.31157 17.8977 2.816 18.3772 3.42781 18.3772H12.6912C13.3032 18.3772 13.8077 17.8972 13.8382 17.2859L14.5493 3.06287H15.6972C15.9087 3.06287 16.0801 2.89146 16.0801 2.68001C16.0801 2.46857 15.9087 2.29715 15.6972 2.29715ZM6.12553 13.4001C6.12553 13.6115 5.95411 13.7829 5.74267 13.7829C5.53122 13.7829 5.35981 13.6115 5.35981 13.4001V7.27433C5.35981 7.06289 5.53122 6.89147 5.74267 6.89147C5.95411 6.89147 6.12553 7.06289 6.12553 7.27433V13.4001ZM8.03973 14.5486C8.25117 14.5486 8.42259 14.3772 8.42259 14.1658V6.5086C8.42259 6.29715 8.25117 6.12574 8.03973 6.12574C7.82828 6.12574 7.65687 6.29715 7.65687 6.5086V14.1658C7.65687 14.3772 7.82828 14.5486 8.03973 14.5486ZM10.7204 13.4001C10.7204 13.6115 10.549 13.7829 10.3376 13.7829C10.1261 13.7829 9.95471 13.6115 9.95471 13.4001V7.27433C9.95471 7.06289 10.1261 6.89147 10.3376 6.89147C10.549 6.89147 10.7204 7.06289 10.7204 7.27433V13.4001ZM5.11937 1.05584L4.80911 2.29715H11.2705L10.9602 1.05584C10.9178 0.885236 10.7645 0.765523 10.5887 0.765711H5.49082C5.31503 0.765523 5.16176 0.885236 5.11937 1.05584Z" fill="#D93F3F"/>
</svg>
                </button>
                </div>
            </div>
            </div>
            <div className='cart__checkout'>
                <div>
                <span className='cart__promo'>Kode Promo</span>
                <label>
                    <input placeholder='INDONESIA' className='cart__input-country' type="text" />
                   
                </label>
                <span className='cart__share'>35% OFF</span>
                </div>
                <div className='cart__right-side'>
                <p className='cart__old-price'>Rp 3.312.000</p>
                <p className='cart__new-price'>Rp 2.152.000</p>
                </div>
               
            </div>
             <button className='cart__check'>Checkout</button>
        </div>
        </div>
</div>
    )
}

export default Cart;
