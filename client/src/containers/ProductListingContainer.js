import ProductList from '../components/ProductList';
import { connect } from 'react-redux';
import { addProductToCart } from '../actions/cart';
import { productsFetch } from '../actions/products';

const mapStateToProps = (state) => {
    return {
        products: state.products,
        productsLoading: state.productsLoading,
        productsError: state.productsError,
}};

const mapDispatchToProps = (dispatch) => ({
    handleProductFetch: (url) => {
        dispatch(productsFetch(url));
    },
    handAddToCart: (product) => {
        dispatch(addProductToCart(product));
    },
});

const ProductListContainer = connect(mapStateToProps, mapDispatchToProps)(ProductList);
export { ProductListContainer };