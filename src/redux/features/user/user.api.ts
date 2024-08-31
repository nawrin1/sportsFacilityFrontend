import { baseApi } from '../../api/baseApi';
export type TQueryParam = {
  name: string;
  value: string | React.Key;
};
const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: '/auth/singleUser',
        method: 'GET',
       
      }),
      providesTags:['user']
    }),
    getMyBooking: builder.query({
      query: () => ({
        url: 'bookings/user',
        method: 'GET',
       
      }),
      providesTags:['booking']
    }),
    deleteMyBooking: builder.mutation({
        
      query: (id) => ({
        url: `/bookings/${id}`,
        method: 'DELETE',
       
       
      }),
      invalidatesTags:['booking']
    }),
    singleMyBooking: builder.query({
        
      query: (id) => ({
        url: `/bookings/${id}`,
        method: 'GET',
       
       
      }),
      providesTags:['booking']
    }),
    userBooking: builder.mutation({
        
      query: (data) => ({
        url: `/bookings`,
        method: 'POST',
        body:data
       
       
      }),
      invalidatesTags:['booking']
    }),
    createPayment: builder.mutation({
      
        
      query: (data) =>{
        console.log(data)
        return  {
        url: '/auth/create-payment-intent',
        method: 'POST',
        body:data
       
       
      }}
    }),

    
    checkSlots: builder.query({
      query: (args) => {
        console.log("Args received:", args);
        
        // Initialize a new object correctly
        // const newObj = {};
    
        // // Correctly iterate over args (assuming it's an array of objects)
        // if (args) {
        //   for (const item of args) {
        //     // Assuming each item is an object like { date: '2024-08-15' } or { facility: '666d96f0f9745d5946212f3e' }
        //     for (const key in item) {
        //       if (item.hasOwnProperty(key)) {
        //         newObj[key] = item[key];
        //       }
        //     }
        //   }
        // }
        
        // console.log("Formatted new object:", newObj);
    
        return {
          url: '/check-availability',
          method: 'GET',
          params: args, 
        };
      },
    }),
    


  }),
});

export const {useGetUserQuery,useCreatePaymentMutation ,useUserBookingMutation,useGetMyBookingQuery,useDeleteMyBookingMutation,useSingleMyBookingQuery,useCheckSlotsQuery} = userApi;