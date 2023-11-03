import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../../slices/authSlice';
import Redirect from './Redirect';

const PrivateRoute = ({ children }) => {
 const {id} = useSelector(selectAuth)

  return id ? children : <Redirect />;
};

export default PrivateRoute;
