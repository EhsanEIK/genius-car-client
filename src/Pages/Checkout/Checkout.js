import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData();
    const { title } = service;

    return (
        <div>
            <h2 className="my-5 text-5xl text-center font-bold">{title}</h2>
        </div>
    );
};

export default Checkout;