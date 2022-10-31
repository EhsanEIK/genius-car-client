import React, { useEffect, useState } from 'react';
import ServiceCard from '../Services/ServiceCard';
import ProductCard from './ProductCard';

const Produtcts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className='my-32'>
            <p className="text-xl text-center text-orange-600 font-bold">Popular Products</p>
            <h1 className="text-5xl text-center font-bold text-black my-6">Browse Our Products</h1>
            <p className='w-2/4 mx-auto text-center mb-20'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-14'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}></ProductCard>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline btn-success text-black">More Products</button>
            </div>
        </div>
    );
};

export default Produtcts;