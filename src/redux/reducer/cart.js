const initialState = {
    items : [],
};

const cart = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TO_CART' : {
            const currentItems = !state.items[action.payload.id]
            ? [action.payload]
            :[...state.items[action.payload.id].items, action.payload];
            const newItems = {
                ...state.items,
                [action.payload.id] : {
                    items: currentItems,
                }
            }
            return {
                ...state,
                items: newItems,
            }
        }
        default: {
            return state;
        }
    }
}
export default cart;