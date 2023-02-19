import React from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { sellectContacts } from '../../redux/filter/filter.selectors';
import { clearFilterReducer } from '../../redux/filter/filterSlice';

// icons
import { MdDelete } from 'react-icons/md';

// components
import { Box } from '../Box';
import { ContactButtonStyled } from './Contact.styled';
import { deleteContact } from 'redux/contacts/contactsOperations';

const Contact = ({ contactId, name, phone }) => {
  const dispatch = useDispatch();

  const contacts = useSelector(sellectContacts);

  const deleteHendler = contactId => {
    dispatch(deleteContact(contactId));

    const isPhonebookEmpty = contacts.length === 1;

    if (isPhonebookEmpty) {
      dispatch(clearFilterReducer());
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      {name}: {phone}
      <ContactButtonStyled
        type="button"
        aria-label="Delete contact"
        onClick={() => deleteHendler(contactId)}
      >
        <MdDelete size="25" />
      </ContactButtonStyled>
    </Box>
  );
};

export default Contact;
