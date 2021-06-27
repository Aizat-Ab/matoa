import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { plusItem, minusItem, removeWatch } from '../../redux/action/cart';


const CartItem = ({id, title, img, price, oldPrice, totalPrice, totalCount, onRemove }) => {
  // const a = {
  //   id, title, img, price, oldPrice, totalPrice, totalCount
  // }
  const [count, setCount] = React.useState(0);

  const dispatch = useDispatch();


  // const decrementOnClick = () => {
  //   if (count > 1) {
  //     setCount(count - 1);
  //   }
  // };
  const items = useSelector((state) => state.items);

  // const handleRemoveClick = () => {
  //   onRemove(id)
  // }

  // const onPlusItem = () => {
  //   dispatch(plusItem(id))
  // }

  // const onMinusItem = () => {
  //   dispatch(minusItem(id))
  // }

//   const onRemoveItem = () => {
//     if (window.confirm('Вы действительно хотите удалить пиццу?')){
//         dispatch(removeWatch(id))
//     }
// }

  return (
    <div className="cart__border">
      <div className="cart__left">
        <img className="cart__image" src={img} alt="" />
        <div className="cart__description">
          <p className="cart__name">{title}</p>
          <p className="cart__old-price">Rp {oldPrice}</p>
          <p className="cart__new-price">Rp {price}</p>
          <p className="cart__custom">Custom Engrave</p>
          <p className="cart__text">“Happy | Birthday | from”</p>
        </div>
      </div>
      <div className="cart__right">
        <p className="cart__select">Select Packaging</p>
        <label>
          <input className="cart__input" type="text" />
        </label>
        <div className="cart__btns">
          <button className="cart__btn">
            -
          </button>
          <span className="cart__volume">{totalCount}</span>
          <button  className="cart__btn">
            +
          </button>
          <span className="cart__price">Rp. {totalPrice}</span>
          <button  className="cart__delete">
            <svg
              width="17"
              height="19"
              viewBox="0 0 17 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.6972 2.29715H12.0601L11.7033 0.870009C11.5755 0.358703 11.1161 5.13325e-06 10.589 0H5.49104C4.964 5.13325e-06 4.50459 0.358703 4.37677 0.870009L4.02002 2.29715H0.382859C0.171412 2.29715 0 2.46857 0 2.68001C0 2.89146 0.171412 3.06287 0.382859 3.06287H1.56972L2.28069 17.2866C2.31157 17.8977 2.816 18.3772 3.42781 18.3772H12.6912C13.3032 18.3772 13.8077 17.8972 13.8382 17.2859L14.5493 3.06287H15.6972C15.9087 3.06287 16.0801 2.89146 16.0801 2.68001C16.0801 2.46857 15.9087 2.29715 15.6972 2.29715ZM6.12553 13.4001C6.12553 13.6115 5.95411 13.7829 5.74267 13.7829C5.53122 13.7829 5.35981 13.6115 5.35981 13.4001V7.27433C5.35981 7.06289 5.53122 6.89147 5.74267 6.89147C5.95411 6.89147 6.12553 7.06289 6.12553 7.27433V13.4001ZM8.03973 14.5486C8.25117 14.5486 8.42259 14.3772 8.42259 14.1658V6.5086C8.42259 6.29715 8.25117 6.12574 8.03973 6.12574C7.82828 6.12574 7.65687 6.29715 7.65687 6.5086V14.1658C7.65687 14.3772 7.82828 14.5486 8.03973 14.5486ZM10.7204 13.4001C10.7204 13.6115 10.549 13.7829 10.3376 13.7829C10.1261 13.7829 9.95471 13.6115 9.95471 13.4001V7.27433C9.95471 7.06289 10.1261 6.89147 10.3376 6.89147C10.549 6.89147 10.7204 7.06289 10.7204 7.27433V13.4001ZM5.11937 1.05584L4.80911 2.29715H11.2705L10.9602 1.05584C10.9178 0.885236 10.7645 0.765523 10.5887 0.765711H5.49082C5.31503 0.765523 5.16176 0.885236 5.11937 1.05584Z"
                fill="#D93F3F"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
