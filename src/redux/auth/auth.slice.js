import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refresh, registerUser } from './auth.operations';

const initialAuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  extraReducers: builder => {
    builder

      // Register
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user = payload.user;
      })

      // Login
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user = payload.user;
      })

      // Logout
      .addCase(logout.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = { name: null, email: null };
        state.isRefreshing = false;
      })

      // Refresh
      .addCase(refresh.pending, (state, { payload }) => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload;
        state.isRefreshing = false;
      })
      .addCase(refresh.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
