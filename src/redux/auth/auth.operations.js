import { createAsyncThunk } from '@reduxjs/toolkit';
import { RequestsApi } from 'components/services';
import { BASE_URL, USER_ENDPOINT } from 'components/settings';
import { toast } from 'react-toastify';

const publickRequest = new RequestsApi(BASE_URL);

export const registerUser = createAsyncThunk(
  'user/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await publickRequest.api.post(
        USER_ENDPOINT.signup,
        credentials
      );
      publickRequest.setToken(data.token);
      return data;
    } catch (error) {
      toast.error(error.message);

      rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await publickRequest.api.post(
        USER_ENDPOINT.login,
        credentials
      );
      publickRequest.setToken(data.token);

      return data;
    } catch (error) {
      toast.error(error.message);

      rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await publickRequest.api.post(USER_ENDPOINT.logout);
      publickRequest.removeToken();
    } catch (error) {
      toast.error(error.message);

      rejectWithValue(error);
    }
  }
);

export const refresh = createAsyncThunk(
  'user/refresh',
  async (_, { rejectWithValue, getState }) => {
    const {
      auth: { token },
    } = getState();

    if (token === null) {
      return rejectWithValue('User is not authorized. Relogin, please!');
    }

    try {
      publickRequest.setToken(token);
      const { data } = await publickRequest.api.get(USER_ENDPOINT.current);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
