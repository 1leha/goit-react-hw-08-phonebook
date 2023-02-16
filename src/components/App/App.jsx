// import { useEffect } from 'react';
// Redux
import { Container } from 'components/Container/Container.styled';
import Layout from 'components/Layout';
import RegisterPage from 'Pages/RegisterPage';
import { Route, Routes } from 'react-router-dom';
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
  // const dispatch = useDispatch();
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

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home</div>} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<div>Login</div>} />
          <Route path="contacts" element={<div>Contacts</div>} />
        </Route>
      </Routes>
    </Container>

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
