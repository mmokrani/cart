import {FETCH_PRODUCTS_SUCCESS, PRODUCTS_LOADING,PRODUCTS_HAS_ERROR} from '../constants';

export const products = (state = [], {type, products}) => {
    switch (type) {
        case FETCH_PRODUCTS_SUCCESS:
            return products;
        default :
            return state;    
    }
};

export const productsLoading = (state = false, {type, isLoading}) => {
    switch (type){
        case PRODUCTS_LOADING:
            return isLoading;
    }
    return state;
};

export const productsError = (state = false, {type, hasError}) => {
    switch(type){
        case PRODUCTS_HAS_ERROR:
            return hasError;
    }
    return state;
};