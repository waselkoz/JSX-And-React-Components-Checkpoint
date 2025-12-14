import React from 'react';
import product from './product';

const Price = () => {
    return (
        <h4 style={{ color: '#28a745', fontWeight: 'bold' }}>
            {product.price}
        </h4>
    );
};

export default Price;
