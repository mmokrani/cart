import React, {PureComponent} from 'react';
import { Product } from './Product';
import { productsFetch } from '../actions';

export default class ProductList extends PureComponent {
    componentDidMount(){
        this.props.dispatch(productsFetch('/api/products'));        
    }
    render() {
        //console.log(this.props);
        if(this.props.productsLoading) {
            return <div>Loading</div>;
        }
        if(this.props.productsError) {
            return <div>Error</div>;
        }
        const products = this.props.products;
        console.log(products);
        const productList = products.map((product) => (
            <div key={product.id}>
                <Product product={product}/>
            </div>
        ));
        return <div>{productList}</div>
    }
}
