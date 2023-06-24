import { Navigation } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { Header } from './AppBar.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
