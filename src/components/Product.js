import React from 'react';

export const Product = (product) => {
    console.log(product);
    return (<div>
        <div>Réference : {product.product.label}</div>
    </div>)
    };
