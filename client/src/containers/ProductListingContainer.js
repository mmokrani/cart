import React from 'react';
import ProductList from '../components/ProductList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    
    
    return {
    products: state.products,
    productsLoading: state.productsLoading,
    productsError: state.productsError,
}};


const ProductListContainer = connect(mapStateToProps)(ProductList);
export { ProductListContainer };