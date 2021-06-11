import React from 'react';
import './index.scss';
import { useSelector} from 'react-redux';
import CartItem from '../../components/cartItem';
import '../../components/home/index.scss';
import Watch from '../../components/watch';
import Monthly from '../../components/monthly';
import { removeCartItem } from "../../redux/action/cart";


const Carted = () => {
    const [activeCart, setActiveCart] = React.useState(false);
    
    // const { totalCount, totalPrice } = useSelector(({cart})=>({
    //     totalCount: cart.totalCount,
    //     totalPrice: cart.totalPrice
    // }))
    // // const { totalPrice, totalCount } = useSelector(({ cart }) => cart);
    // const { totalCount, totalPrice } = useSelector((redux) => redux.cart);

    const items = useSelector(state => state.items)
    const addMovies = Object.keys(items).map((key) => {
        return items[key].items[0]
    });
    const {totalPrice, totalCount} = useSelector((state) => state);
    // console.log(total)

    // const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

    return (
        <div className='cart'>
<svg onClick={()=>setActiveCart(!activeCart)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.2909 3.84C19.8035 3.83988 20.2257 4.24237 20.2501 4.7543L21.1188 22.9943C21.1313 23.2566 21.0358 23.5125 20.8546 23.7025C20.6734 23.8925 20.4223 24 20.1597 24H4.79974C4.53726 23.9999 4.28627 23.8923 4.10518 23.7023C3.92408 23.5123 3.82868 23.2565 3.84118 22.9943L4.70979 4.7543C4.73418 4.24241 5.15635 3.83993 5.66883 3.84H8.68639C8.68639 1.71923 10.4056 0 12.5264 0C14.6472 0 16.3664 1.71923 16.3664 3.84H19.2909ZM15.4064 3.84C15.4046 2.25017 14.1162 0.961799 12.5264 0.96C10.9366 0.961799 9.64819 2.25017 9.64639 3.84H15.4064ZM5.66883 4.8H8.6864V8.16C8.6864 8.4251 8.90131 8.64 9.1664 8.64C9.4315 8.64 9.6464 8.4251 9.6464 8.16V4.8H15.4064V8.16C15.4064 8.4251 15.6213 8.64 15.8864 8.64C16.1515 8.64 16.3664 8.4251 16.3664 8.16V4.8H19.2799L19.9744 19.2H4.98311L5.66883 4.8ZM4.93693 20.16L4.79974 23.04H20.1597L20.0206 20.16H4.93693Z" fill="#333333"/>
</svg>
        <span className='cart__totalCount'>{totalCount}</span>
        <div className='a' onClick={activeCart}>
        <div style={
            { transform: activeCart ? 'translateY(0vh)' : 'translateY(-100vh)', 
                opacity: activeCart ? '1' : '0'
                }} 
                className='cart__wrapper'>
            
            {addMovies.map((item) =>{
                return <CartItem 
                {...item} 
                id={item.id}
                totalPrice={items[item.id].totalPrice}/>
            })}
           
            <div className='cart__checkout'>
                <div>
                <span className='cart__promo'>Kode Promo</span>
                <label>
                    <input placeholder='INDONESIA' className='cart__input-country' type="text" />
                   
                </label>
                <span className='cart__share'>35% OFF</span>
                </div>
                <div className='cart__right-side'>
                <p className='cart__new-price'>Rp {totalCount}</p>
                <p className='cart__new-price'>Rp {totalPrice}</p>
                </div>
               
            </div>
             <button className='cart__check'>Checkout</button>
        </div>
        </div>
</div>
    )
}

export default Carted;
