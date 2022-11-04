import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearar ${localStorage.getItem('genius-token')}`,
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                        .then(r => toast.success("Unauthorized access, please login again."))
                        .catch(error => console.error(error));
                }
                return res.json();
            })
            .then(data => setOrders(data));
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure to delete this?");
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("Order deleted successfully!!!");
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remainingOrders = orders.filter(odr => odr._id !== id);
                    const approvingOrder = orders.find(odr => odr._id === id);
                    approvingOrder.status = 'Approved';

                    const newOrders = [approvingOrder, ...remainingOrders];
                    setOrders(newOrders);
                }
            })
    }

    return (
        <div>
            <h1>Total Orders: {orders.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                </label>
                            </th>
                            <th>Service Name</th>
                            <th>Customer Name</th>
                            <th>Price</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;