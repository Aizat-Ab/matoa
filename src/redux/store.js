import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cart from './reducer/cart';

const store = createStore(cart,composeWithDevTools(applyMiddleware(thunk)));
export default store;
