import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData();
    const { title } = service;

    return (
        <div className='bg-slate-200 rounded-xl p-10 my-10'>
            <h2 className="my-5 text-5xl text-center font-bold">{title}</h2>
            <form>
                <div className='grid grid-cols-2 gap-5'>
                    <input type="text" name="firstName" placeholder="First Name" className="input input-bordered w-full" />
                    <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered w-full" />
                    <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered w-full" />
                    <input type="text" name="email" placeholder="Your Email" className="input input-bordered w-full" />
                </div>
                <textarea className="textarea textarea-bordered w-full h-48 mt-5" placeholder="Your Message"></textarea>
                <input type="submit" className='bg-orange-500 text-white roundedlg btn w-full p-3 mt-5' value=" Order Confirm" />
            </form>
        </div>
    );
};

export default Checkout;