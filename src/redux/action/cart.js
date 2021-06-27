// export const addCartAction = (pizzaObject) => ({
//     type: 'ADD_TO_CART',
//     payload: pizzaObject,
//   });
  
// export const removeWatch = (id) => ({
//   type: 'REMOVE_WATCH',
//   payload: id,
// })

// export const plusItem = (id) => ({
//   type: 'PLUS_CART_ITEM',
//   payload: id,
// })

// export const minusItem = (id) => ({
//   type: 'MINUS_CART_ITEM',
//   payload: id,
// })
// export const deleteAll = (id) => ({
//   type: 'A',
//   payload: id,
// })


export const addToCart = (id) => ({
    type: 'ADD_TO_WATCH',
    payload: id
})
export const clearCart = () => ({
    type: 'CLEAR_CART',
})
