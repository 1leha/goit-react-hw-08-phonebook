// import { useEffect } from 'react';
// Redux
import { PrivatRoute } from 'components/AuthRoutes/PrivatRoute';
import { PublicRoute } from 'components/AuthRoutes/PublicRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from 'Pages/Home';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refresh, selectIsRefreshing } from 'redux/auth';
import { FullscreenSpiner } from 'components/Spiners/Spiner';

const Layout = lazy(() => import('components/Layout'));
const LoginPage = lazy(() => import('Pages/LoginPage'));
const RegisterPage = lazy(() => import('Pages/RegisterPage'));
const Contacts = lazy(() => import('Pages/Contacts'));

// App
export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<FullscreenSpiner />}>
        {!isRefreshing && (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              {/* Publick */}
              <Route path="/" element={<PublicRoute />}>
                <Route path="register" element={<RegisterPage />} />
                <Route path="login" element={<LoginPage />} />
              </Route>

              {/* PRIVAT */}
              <Route path="/" element={<PrivatRoute />}>
                <Route path="contacts" element={<Contacts />} />
              </Route>
              <Route path="*" element={<div>Tipe loading ERROR!</div>} />
            </Route>
          </Routes>
        )}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Suspense>
    </>
  );
};
