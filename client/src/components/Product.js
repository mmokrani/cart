import React from 'react';

export const Product = ({product}) => {
    console.log(product.title);
    return (<div>
        <div>Réference : {product.title}</div>
        <div>Qty : {product.inventory}</div>
        <div>Prix : {product.price}</div>
    </div>)
    };
