import { Link } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <nav>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}
