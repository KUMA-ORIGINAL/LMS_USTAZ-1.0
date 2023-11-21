import { useSelector } from 'react-redux';
import { selectAuth } from '../../../slices/authSlice';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
 const {id} = useSelector(selectAuth)
 const navigate = useNavigate()

  return id ? children : navigate("/auth");
};

export default PrivateRoute;
