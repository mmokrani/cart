import React, {PureComponent} from 'react';
import { Product } from './Product';
import { productsFetch } from '../actions';

export default class ProductList extends PureComponent {
    componentDidMount(){
        this.props.dispatch(productsFetch('../api/products.json'));        
    }
    render() {
        //console.log(this.props);
        if(this.props.productsLoading) {
            return <div>Loading</div>;
        }
        if(this.props.productsError) {
            return <div>Error</div>;
        }
        console.log(this.props.products);
        const productList = this.props.products.map((product, productId) => (
            <div key={productId}>
                <Product product={product}/>
            </div>
        ));
        return <div>{productList}</div>
    }
}
