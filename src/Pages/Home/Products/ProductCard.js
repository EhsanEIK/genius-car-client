import React from 'react';

const ProductCard = ({ product }) => {
    const { image, name, price } = product;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="" className='w-56 h-56' /></figure>
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className='text-orange-600 text-xl font-semibold'>${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;