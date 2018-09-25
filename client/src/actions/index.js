import {FETCH_PRODUCTS_SUCCESS, PRODUCTS_LOADING,PRODUCTS_HAS_ERROR} from '../constants';

export const productsHasError = (hasError) => ({
    type: PRODUCTS_HAS_ERROR,
    hasError: hasError,
});

export const productsIsLoading = (isLoading) => ({
    type: PRODUCTS_LOADING,
    isLoading: isLoading,
});

export const productsFetchSucces = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    products: products,
});

export const productsFetch = (url) => {
    return (dispatch) => {
        //1 Loading avant l'appel Ajax
        dispatch(productsIsLoading(true));
        //2 Appel Ajax 
        fetch(url)
            .then(
                (response) => {
                    //console.log(response);
                    if(!response.ok) {
                        throw Error(response.statusText);
                    }

                    dispatch(productsIsLoading(false));               
                    return response;    
                })
                .then((response) => {
                    const res = response.json();
                    //console.log(res);
                    return res;
                })
                .then((products) => dispatch(productsFetchSucces(products)))
                .catch(() => dispatch(productsHasError(true)));
    }
};

// Retourner une fonction au lieu d'un action grace à : reux-thunk
export const errorAflterFiveSecond = () => {
    return (dispatch) => {
        // This function is able to dispatch other action creators
        setTimeout(() => {
            dispatch(productsHasError(true));
        },3000)
    }
};

