import { createSlice } from '@reduxjs/toolkit';

let initialFilter = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    inputFilterReducer(_, { payload }) {
      return payload;
    },
    clearFilterReducer() {
      return '';
    },
  },
});

export const { inputFilterReducer, clearFilterReducer } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
