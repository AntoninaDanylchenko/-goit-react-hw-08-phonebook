import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshCurrentUser } from 'redux/auth/operations';
import { lazy } from 'react';
import RestricteRoute from './RestricteRoute';
import { useAuth } from 'hooks/useAuth';
import PrivateRoute from './PrivateRoute';
import { Layout } from './Layout';

const HomeView = lazy(() => import('../pages/HomeView'));
const RegisterView = lazy(() => import('../pages/RegisterView'));
const LoginView = lazy(() => import('../pages/LoginView'));
const ContactsView = lazy(() => import('../pages/ContactsView'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route
            path="/register"
            element={
              <RestricteRoute component={RegisterView} redirectTo="/contacts" />
            }
          />
          <Route
            path="/login"
            element={
              <RestricteRoute component={LoginView} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsView} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
    )
  );
};

export default App;
