import React from 'react';
import { useSelector } from 'react-redux';
import { sellectFilteredContacts } from 'redux/filter/filter.selectors';
import Contact from '../Contact';

const ContactList = () => {
  const filteredContacts = useSelector(sellectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => (
        <Contact key={id} contactId={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};

export default ContactList;
