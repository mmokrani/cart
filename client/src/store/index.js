import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { products, productsError, productsLoading } from '../reducers/products';
//import { cart } from '../reducers/cart';
import thunk  from 'redux-thunk';

export const store = createStore(
    combineReducers({products, productsError, productsLoading}),
    applyMiddleware(thunk),
    composeWithDevTools(),
);
