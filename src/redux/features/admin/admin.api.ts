import { baseApi } from '../../api/baseApi';

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: () => ({
        url: '/bookings',
        method: 'GET',
       
      }),
    }),
    // getMyBooking: builder.query({
    //   query: () => ({
    //     url: 'bookings/user',
    //     method: 'GET',
       
    //   }),
    // }),
    // deleteMyBooking: builder.mutation({
        
    //   query: (id) => ({
    //     url: `/bookings/${id}`,
    //     method: 'DELETE',
       
       
    //   }),
    // }),
    // singleMyBooking: builder.query({
        
    //   query: (id) => ({
    //     url: `/bookings/${id}`,
    //     method: 'GET',
       
       
    //   }),
    // }),


  }),
});

export const {useGetAllBookingsQuery } = adminApi;