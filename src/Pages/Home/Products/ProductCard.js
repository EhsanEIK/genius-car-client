import React from 'react';
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const { image, name, price } = product;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="" className='w-56 h-56' /></figure>
            <div className="card-body text-center">
                <div className='flex justify-center'>
                    <FaStar className='text-orange-600 w-4 h-4' />
                    <FaStar className='text-orange-600 w-4 h-4' />
                    <FaStar className='text-orange-600 w-4 h-4' />
                    <FaStar className='text-orange-600 w-4 h-4' />
                    <FaStar className='text-orange-600 w-4 h-4' />
                </div>
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className='text-orange-600 text-xl font-semibold'>${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;