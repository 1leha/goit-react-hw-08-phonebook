import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// import axios from 'axios';

// const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: '' }) =>
//   async ({ url, method, data, params }) => {
//     try {
//       const result = await axios({ url: baseUrl + url, method, data, params });
//       return { data: result.data };
//     } catch (axiosError) {
//       let err = axiosError;
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       };
//     }
//   };

// export const authApi = createApi({
//   reducerPath: 'auth',
//   baseQuery: axiosBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com',
//   }),
//   endpoints: builder => ({
//     getCurrentUser: builder.query({
//       query: () => ({ url: `/users/current`, method: 'get' }),
//     }),
//     registerUser: builder.mutation({
//       query: async credentials => {
//         console.log('credentials :>> ', credentials);
//         return {
//           url: `/users/signup`,
//           method: 'post',
//           body: credentials,
//         };
//       },
//     }),
//   }),
// });

// export const authApi = createApi({
//   reducerPath: 'auth',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com',
//   }),
//   endpoints: builder => ({
//     getCurrentUser: builder.query({
//       query: () => ({ url: `/users/current`, method: 'get' }),
//     }),
//     registerUser: builder.mutation({
//       query: credentials => ({
//         url: `/users/signup`,
//         method: 'POST',
//         body: JSON.stringify(credentials),
//       }),
//     }),
//   }),
// });

// export const { useGetCurrentUserQuery, useRegisterUserMutation } = authApi;
