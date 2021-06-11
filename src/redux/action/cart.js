// export const addToCart = (movie) => ({
//     type: 'ADD_TO_CART',
//     payload: movie,
// })
export const addCartAction = (pizzaObject) => ({
    type: 'ADD_TO_CART',
    payload: pizzaObject,
  });
  
export const removeFromCart = () => ({
    type: 'REMOVE_FROM_CART',
})

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id
})

export const plusCartAction = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload: id,
  });