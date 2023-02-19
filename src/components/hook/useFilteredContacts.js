const { useSelector } = require('react-redux');
const { useGetContactQuery } = require('redux/contacts/contacts.api');
const { sellectFilter } = require('redux/filter/filter.selectors');

export const useFilteredContacts = () => {
  const { data: contacts = [], error, isLoading } = useGetContactQuery();
  const filter = useSelector(sellectFilter);
  const filterNormalized = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterNormalized)
  );
  return { filteredContacts, contacts, options: { error, isLoading } };
};
