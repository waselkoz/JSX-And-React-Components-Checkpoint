import React from 'react';
import product from './product';

const Image = () => {
    return (
        <img
            src={product.image}
            alt={product.name}
            style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
        />
    );
};

export default Image;
