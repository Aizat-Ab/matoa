const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice = (arr) => arr.reduce((sum, obj)=> obj.price + sum, 0)

const cart = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART' : {
            const currentWatchItems = !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id] : {
                    items: currentWatchItems,
                    totalPrice: getTotalPrice(currentWatchItems),
                }
            }
            const items = Object.values(newItems).map((obj) => obj.items)
            const allPizzas = [].concat.apply([], items)
            const totalPrice = getTotalPrice(allPizzas)

            return {
                ...state.items,
                items: newItems,
                totalCount: allPizzas.length, 
                totalPrice,
            }
        }
     default:
     return state;
     }
}
export default cart;