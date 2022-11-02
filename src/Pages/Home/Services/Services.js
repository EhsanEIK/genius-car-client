import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='my-32'>
            <p className="text-xl text-center text-orange-600 font-bold">Service</p>
            <h1 className="text-5xl text-center font-bold text-black my-6">Our Service Area</h1>
            <p className='w-2/4 mx-auto text-center mb-20'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
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