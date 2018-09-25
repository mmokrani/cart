import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from '../constants';

export const cart = (state = {}, action) => {
    switch(action.type) {
        case ADD_PRODUCT_TO_CART:
            // vérifier sie le produit existe dans le Cart
            if(state[action.product.id] == null){
                const prd = action.product;
                prd.qty = 1;

                return {
                    ...state, 
                    [prd.id]: prd
                };
            }else{
                const prd = state[action.product.id];
                prd.qty++;
                
                return {
                    ...state, 
                    [prd.id]: prd
                };
            }
        case REMOVE_PRODUCT_FROM_CART:
            const {[action.productId]: value, ...rest} = state;
            return rest;     
        default: return state;
    }
    return state;
};
