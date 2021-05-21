export const addToCart = (movie) => ({
    type: 'ADD_TO_CART',
    payload: movie,
})

export const removeFromCart = () => ({
    type: 'REMOVE_FROM_CART',
})