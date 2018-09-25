import React from 'react';
import { Product } from './Product';

export const Cart = ({ products, handlePlus, handleMinus, handleRemove }) => {
    const productsList = products.map((product, i) => {
        <div key={product.id}>
            <Product product={product} />
            <button onClick={handleMinus(product.id)}>-</button>
            <button onClick={handlePlus(product.id)}>+</button>
            <button onClick={handleRemove(product.id)}>Supprimer</button>
        </div>
    });
    return <div>{productsList}</div>;
};