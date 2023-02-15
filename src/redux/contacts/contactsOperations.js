import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63e11c56dd7041cafb4147dc.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const respond = await axios.get('/contacts');
      return respond.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (user, { rejectWithValue }) => {
    try {
      const respond = await axios.post('/contacts', user);

      return respond.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const respond = await axios.delete('/contacts/' + id);

      return respond.data.id;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const clearAllContact = createAsyncThunk(
  'contacts/clearAllContact',
  () => {
    return [];
  }
);
