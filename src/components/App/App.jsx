// import { useEffect } from 'react';
// Redux
import { PrivatRoute } from 'components/AuthRoutes/PrivatRoute';
import { PublicRoute } from 'components/AuthRoutes/PublicRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'components/common/Container.styled';
import { Home } from 'Pages/Home';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refresh, selectIsRefreshing } from 'redux/auth';
import {
  FullscreenSpiner,
  LocaleSpiner,
} from 'components/Spiners/FullscreenSpiner';

const Layout = lazy(() => import('components/Layout'));
const LoginPage = lazy(() => import('Pages/LoginPage'));
const RegisterPage = lazy(() => import('Pages/RegisterPage'));
const Contacts = lazy(() => import('Pages/Contacts'));

// import { useDispatch, useSelector } from 'react-redux';
// import { clearFilterReducer } from '../../redux/filterSlice';
// import {
//   sellectError,
//   sellectFilteredContacts,
//   sellectIsLoading,
//   sellectIsPhonebookEmpty,
// } from '../../redux/selectors';

// icons
// import { AiOutlineClear } from 'react-icons/ai';

// settings
// import { message } from '../settings';

// components
// import { Box } from '../Box';
// import Section from '../Section';
// import PhonebookEditor from '../PhonebookEditor';
// import Filter from '../Filter';
// import ContactList from '../ContactList';
// import Notification from '../Notification';
// import {
//   AppStyled,
//   AppTitleStyled,
//   ClearButtonStyled,
//   VersionStyled,
// } from './App.styled';

// Operations
// import {
//   clearAllContact,
//   fetchContacts,
// } from 'redux/contacts/contactsOperations';

// App
export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  // const isLoading = useSelector(sellectIsLoading);
  // const error = useSelector(sellectError);
  // const filteredContacts = useSelector(sellectFilteredContacts);
  // const isPhonebookEmpty = useSelector(sellectIsPhonebookEmpty);
  // const isFilteredContactsEmpty = filteredContacts.length === 0;
  // const { isEmptyBook, noMatches } = message;

  // const clearAllContactHandler = () => {
  //   dispatch(clearAllContact());
  //   dispatch(clearFilterReducer());
  // };

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

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
    // old APP
    // <Box
    //   height="100vh"
    //   display="flex"
    //   flexDirection="column"
    //   alignItems="center"
    //   justifyContent="center"
    //   fontSize="l"
    //   color="primary"
    // >
    //   <Box position="relative">
    //     <AppTitleStyled>My phonebook</AppTitleStyled>
    //     <VersionStyled>Redux. Mockapi.io</VersionStyled>
    //   </Box>

    //   <AppStyled>
    //     {/* Section Contacts editor */}
    //     <Section title="Contacts editor">
    //       <PhonebookEditor />
    //     </Section>

    //     {/* Simple spiner */}
    //     <Box display="block" height="20px" textAlign="center" color="red">
    //       {isLoading && <div>Loading...</div>}
    //     </Box>

    //     {/* Section Contacts */}
    //     {!error && (
    //       <Section title="Contacts">
    //         <ClearButtonStyled
    //           type="button"
    //           aria-label="Clear all contacts"
    //           disabled={isPhonebookEmpty}
    //           onClick={clearAllContactHandler}
    //         >
    //           <AiOutlineClear size="30" />
    //         </ClearButtonStyled>

    //         {isPhonebookEmpty ? (
    //           <Notification message={isEmptyBook} />
    //         ) : (
    //           <>
    //             <Filter />

    //             {isFilteredContactsEmpty ? (
    //               <Notification message={noMatches} />
    //             ) : (
    //               <ContactList />
    //             )}
    //           </>
    //         )}
    //       </Section>
    //     )}
    //   </AppStyled>
    // </Box>
  );
};
