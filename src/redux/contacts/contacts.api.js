import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, CONTACTS_ENDPOINT } from 'components/settings';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Contacts'],

  endpoints: builder => ({
    getContact: builder.query({
      query: () => CONTACTS_ENDPOINT.contacts,
      providesTags: ['Contacts'],
    }),

    addContact: builder.mutation({
      query: credentials => ({
        url: CONTACTS_ENDPOINT.contacts,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: CONTACTS_ENDPOINT.contacts + `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),

    updateContact: builder.mutation({
      query: ({ id, credentials }) => {
        return {
          url: CONTACTS_ENDPOINT.contacts + `/${id}`,
          method: 'PATCH',
          body: credentials,
        };
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsApi;
