import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
import { LogOutButton, UserName } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUsername);

  return (
    <div>
      <UserName>{userName}</UserName>
      <LogOutButton
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </LogOutButton>
    </div>
  );
}
