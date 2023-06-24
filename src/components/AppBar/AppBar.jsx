import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from '../Navigation';
import authSelectors from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Header } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
