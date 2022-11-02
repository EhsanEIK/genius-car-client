import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleDelete }) => {
    const { _id, sevice, serviceName, customer, price, phone } = order;

    const [orderService, setOrderService] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services/${sevice}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [sevice])

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        {
                            orderService && <div className="mask mask-squircle w-12 h-12">
                                <img src={orderService?.img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        }
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                {customer}
            </td>
            <td>{price}</td>
            <td>{phone}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default OrderRow;