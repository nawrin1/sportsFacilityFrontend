import { baseApi } from '../../api/baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: '/auth/singleUser',
        method: 'GET',
       
      }),
    }),
    getMyBooking: builder.query({
      query: () => ({
        url: 'bookings/user',
        method: 'GET',
       
      }),
    }),
    deleteMyBooking: builder.mutation({
        
      query: (id) => ({
        url: `/bookings/${id}`,
        method: 'DELETE',
       
       
      }),
    }),
    singleMyBooking: builder.query({
        
      query: (id) => ({
        url: `/bookings/${id}`,
        method: 'GET',
       
       
      }),
    }),


  }),
});

export const {useGetUserQuery ,useGetMyBookingQuery,useDeleteMyBookingMutation,useSingleMyBookingQuery} = userApi;