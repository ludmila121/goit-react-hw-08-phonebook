import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

export default function HomePage() {
  const userName = useSelector(authSelectors.getUsername);
  const isLooggedId = useSelector(authSelectors.getIsLoggedIn);

  return isLooggedId ? (
    <h1>
      Welcome, {userName}! Please <Link to="/contacts">add your contacts</Link>
    </h1>
  ) : (
    <h1>
      Welcome to Phonebook! Please <Link to="/register">register</Link> or{' '}
      <Link to="/login">login</Link>.
    </h1>
  );
}
