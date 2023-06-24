import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ redirectTo = '/login', children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};
export default PrivateRoute;
