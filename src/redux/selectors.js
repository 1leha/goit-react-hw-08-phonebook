import { createSelector } from '@reduxjs/toolkit';
import { useGetContactQuery } from './contacts/contacts.api';

// export const sellectContacts = state => state.contacts.items;
export const sellectIsLoading = state => state.contacts.isLoading;
export const sellectError = state => state.contacts.error;
export const sellectFilter = state => state.filter;

//
// export const sellectFilteredContacts = createSelector(
//   [sellectFilter],
//   async filter => {
//     const filterNormalized = filter.toLowerCase();
//     const { data } = useGetContactQuery();
//     console.log('sellectFilteredContacts data :>> ', await data);
//     return [].filter(({ name }) =>
//       name.toLowerCase().includes(filterNormalized)
//     );
//   }
// );

// export const sellectIsPhonebookEmpty = createSelector(
//   [sellectContacts],
//   contacts => {
//     return contacts.length === 0;
//   }
// );
