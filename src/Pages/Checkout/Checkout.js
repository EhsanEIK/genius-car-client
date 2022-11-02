import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, title, price } = service;

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const order = {
            sevice: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message,
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Congrtazzz!!! Your order is confirmed!!');
                    form.reset();
                }
            })
    }

    return (
        <div className='bg-slate-200 rounded-xl p-10 my-10'>
            <h2 className="my-5 text-5xl text-center font-bold">{title}</h2>
            <form onSubmit={handlePlaceOrder}>
                <div className='grid grid-cols-2 gap-5'>
                    <input type="text" name="firstName" placeholder="First Name" className="input input-bordered w-full" />
                    <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered w-full" />
                    <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered w-full" />
                    <input type="text" name="email" placeholder="Your Email" className="input input-bordered w-full" defaultValue={user?.email} readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered w-full h-48 mt-5" placeholder="Your Message"></textarea>
                <input type="submit" className='bg-orange-500 text-white roundedlg btn w-full p-3 mt-5' value=" Order Confirm" />
            </form>
        </div>
    );
};

export default Checkout;