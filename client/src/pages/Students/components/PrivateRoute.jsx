import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../../store/slices/auth/authSlice';
import Redirect from './Redirect';

const PrivateRoute = ({ children }) => {
 const {token} = useSelector(selectAuth)

  return token ? children : <Redirect />;
};

export default PrivateRoute;
