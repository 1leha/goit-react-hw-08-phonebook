import { createSlice } from '@reduxjs/toolkit';
import { pandingHandler, rejectedHandler } from './contactsHandlers';

import {
  fetchContacts,
  addContact,
  deleteContact,
  clearAllContact,
} from './contactsOperations';

function createData(id, name, number, createdAt) {
  return {
    id,
    name,
    number,
    createdAt,
  };
}

const rows = [
  createData(1, 'Alex', '000 111 22 55', '2023/11/01'),
  createData(2, 'Der', '000 111 22 33', '2023/07/01'),
  createData(3, 'AAdff', '000 111 44 33', '2023/01/04'),
  createData(4, 'assad', '000 111 44 33', '2023/01/04'),
  createData(5, 'dfgd', '000 111 44 33', '2023/01/04'),
  createData(6, 'rtuy', '000 111 44 33', '2023/01/04'),
  createData(7, 'rgdg', '000 111 44 33', '2023/01/04'),
  createData(8, 'uio', '000 111 44 33', '2023/01/04'),
];

const initialContacts = {
  items: rows,
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  extraReducers: builder => {
    builder
      // Get all contacts redusers
      .addCase(fetchContacts.pending, pandingHandler)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, rejectedHandler)

      // Add contact redusers
      .addCase(addContact.pending, pandingHandler)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, rejectedHandler)

      // Delete contact redusers
      .addCase(deleteContact.pending, pandingHandler)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(deleteContact.rejected, rejectedHandler)

      // Clear all contact redusers
      .addCase(clearAllContact.pending, pandingHandler)
      .addCase(clearAllContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(clearAllContact.rejected, rejectedHandler);
  },
});

export const contactsReducer = contactsSlice.reducer;
