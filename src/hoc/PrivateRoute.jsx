import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { isAuth } = useContext(AuthContext);

  if (!isAuth)
    return <Navigate to='/login' replace state={{ data: location.pathname }} />;
  return children;
};

export default PrivateRoute;
