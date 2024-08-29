import { baseApi } from '../../api/baseApi';

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: () => ({
        url: '/bookings',
        method: 'GET',
       
      }),
    }),
    createAdmin: builder.mutation({
      query: (data) => ({
        url: '/auth/createadmin',
        method: 'POST',
        body:data

       
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

export const {useGetAllBookingsQuery,useCreateAdminMutation } = adminApi;