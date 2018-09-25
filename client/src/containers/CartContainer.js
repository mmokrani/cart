import connect from 'react-redux';
import {  removeProductFromCart, addProductQtyToCart,  minusProductQtyFromCart} from '../actions/cart';
import Cart from '../components/Cart';

mapStateToProps = (state) => {
    products: state.cart
};

mapDispatchToProps = (dispatch) => ({
    handlePlus: (productId) => {
        dispatch(addProductQtyToCart(productId));
    }, 
    handleMinus: (productId) => {
        dispatch(minusProductQtyFromCart(productId));
    }, 
    handleRemove: (productId) => {
        dispatch(removeProductFromCart(productId));
    }
});

export default CartContainer = connect()(Cart);

