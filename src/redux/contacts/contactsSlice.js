import { createSlice } from '@reduxjs/toolkit';
import { pandingHandler, rejectedHandler } from './contactsHandlers';

import {
  fetchContacts,
  addContact,
  deleteContact,
  clearAllContact,
} from './contactsOperations';

const initialContacts = {
  items: [],
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
