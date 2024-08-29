import {  createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';




const baseQuery = fetchBaseQuery({
  baseUrl: 'https://sportbackend-ten.vercel.app/api',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});





export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  tagTypes:["facility"],

  endpoints: () => ({}),
});