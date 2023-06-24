import { AppContainer } from './App.styled';
import { GlobalStyle } from '../GlobalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import authOperations from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
import AppBar from 'components/AppBar/AppBar';
import Loader from 'components/Loader/Loader';
import PublicRoute from 'components/PublicRouter/PublicRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const HomeView = lazy(() => import('../../views/HomeView'));
const RegisterView = lazy(() => import('../../views/RegisterView'));
const LoginView = lazy(() => import('../../views/LoginView'));
const ContactsView = lazy(() => import('../../views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  return (
    <>
      {!isFetchingCurrentUser && (
        <AppContainer>
          <GlobalStyle />
          <AppBar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <HomeView />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <ContactsView />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </AppContainer>
      )}
    </>
  );
}
