import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <h1 className='text-7xl text-center'>Loading...</h1>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace></Navigate >
};

export default PrivateRoute;