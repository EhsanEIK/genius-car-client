import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" className='h-full w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p className='text-orange-600 text-xl font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Get Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;