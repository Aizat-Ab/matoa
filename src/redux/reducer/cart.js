const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice = arr => arr.reduce((sum, obj)=> obj.price + sum, 0)

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_WATCH': {
            const currentWatchItems = !state.items[action.payload.id] ? [action.payload] : 
            [...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentWatchItems,
                    totalPrice: getTotalPrice(currentWatchItems),
                }
            }
            const items = Object.values(newItems).map(obj => obj.items)
            const allWatches = [].concat.apply([], items)
            const totalPrice = getTotalPrice(allWatches)
        return {
            ...state,
            items: newItems,
            totalCount: allWatches.length,
            totalPrice,
        }}
        case 'CLEAR_CART': {
            return { ...state, items: {}, totalPrice: 0, totalCount: 0}}

        default: 
        return state;
    }
}
export default cart;