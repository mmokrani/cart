import React, {PureComponent} from 'react';
import { Product } from './Product';
import { productsFetch } from '../actions/products';

export default class ProductList extends PureComponent {
    componentDidMount(){
        console.log(this.props);
        this.props.handleProductFetch('/api/products');
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
        //console.log(products);
        const productList = products.map((product) => (
            <div key={product.id}>
                <Product product={product}/><button onClick={this.props.handAddToCart(product)}>Ajouter au panier xxx</button><hr/>
            </div>
        ));
        return <div>{productList}</div>
    }
}
