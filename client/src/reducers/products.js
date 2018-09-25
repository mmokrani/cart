import {MINUS_PRODUCT_QTY_FROM_STORE,FETCH_PRODUCTS_SUCCESS, PRODUCTS_LOADING,PRODUCTS_HAS_ERROR} from '../constants';

export const products = (state = [], action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return action.products;

        case MINUS_PRODUCT_QTY_FROM_STORE:
            const prd = state.find((prod, i) => prod.id === action.productId);
            if(prd.qty == 0) return state;
            
            prd.qty--;
            
            return state.map(( prod, i ) => (prod.id ===prd.id) ? prd : prod);
        default :
            return state;    
    }
};

export const productsLoading = (state = false, {type, isLoading}) => {
    switch (type){
        case PRODUCTS_LOADING:
            return isLoading;
        default: return state;    
    }
    return state;
};

export const productsError = (state = false, {type, hasError}) => {
    switch(type){
        case PRODUCTS_HAS_ERROR:
            return hasError;
        default: return state;    
    }
    return state;
};