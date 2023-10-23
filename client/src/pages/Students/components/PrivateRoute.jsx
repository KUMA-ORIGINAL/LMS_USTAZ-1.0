import React from 'react';
import { useSelector } from 'react-redux';
import Redirect from './Redirect';

const PrivateRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);

  return token ? children : <Redirect />;
};

export default PrivateRoute;
