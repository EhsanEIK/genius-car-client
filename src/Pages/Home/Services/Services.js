import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [isAsc, setIsAsc] = useState(true);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://genius-car-server-rouge.vercel.app/services?order=${isAsc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [isAsc])


    return (
        <div className='my-32'>
            <p className="text-xl text-center text-orange-600 font-bold">Service</p>
            <h1 className="text-5xl text-center font-bold text-black my-6">Our Service Area</h1>
            <p className='w-2/4 mx-auto text-center mb-10'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='flex justify-center my-10'>
                <button className='bg-gray-500 hover:bg-gray-600 text-white rounded-lg px-2 py-1' onClick={() => setIsAsc(!isAsc)}>
                    {isAsc ? 'DESC' : 'ASC'}</button>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-14'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}></ServiceCard>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline btn-success text-black">More Services</button>
            </div>
        </div>
    );
};

export default Services;