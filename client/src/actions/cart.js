import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART} from '../constants';
import {minusProductQtyFromStore} from '../actions/products';

export const addProductToCart = (product) => ({
    type: ADD_PRODUCT_TO_CART,
    product: product,
});
/*
export const preapreProductToCart = (product) => {
    return (dispatch) => {
        // 1. Diminuer le stock du Produit
        dispatch(minusProductQtyFromStore(product.id));

        //2. Rajouter le produit dans le Cart 
        dispatch(addProductToCart(product));
    }
};

export const removeProductFromCart = (productId) => ({
    type: REMOVE_PRODUCT_FROM_CART,
    productId: productId,
});

export const addProductQtyToCart = (productId) => {
    return (dispatch) => {
        //dispatch(minus)
    }
};*/
//minusProductQtyFromCart
