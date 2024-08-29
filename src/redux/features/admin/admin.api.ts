import { baseApi } from '../../api/baseApi';

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: () => ({
        url: '/bookings',
        method: 'GET',
       
      }),
      providesTags: ["facility"]
    }),
    createAdmin: builder.mutation({
      query: (data) => ({
        url: '/auth/createadmin',
        method: 'POST',
        body:data

       
      }),
    }),
    getAllFacility: builder.query({
      query: () => ({
        url: '/facility',
        method: 'GET',
       
      }),
      providesTags: ["facility"]
    }),
    deleteFacility: builder.mutation({
        
        
      query: (id) => ({
        url: `/facility/${id}`,
        method: 'DELETE',
       
       
      }),
      invalidatesTags: ["facility"]
    }),
    updateFacility: builder.mutation({
      
        query: (facility) =>  {
         
          console.log(facility.options)

            return {
              url: `/facility/${facility.id}`,
              method: "PUT",
              body:facility.options
             
              
            };
          },
        invalidatesTags: ["facility"]
    }),
    addFacility: builder.mutation({
      
        query: (facility) =>  {
         
          console.log(facility)
  
            return {
              url: `/facility`,
              method: "POST",
              body:facility
             
              
            };
          },
        invalidatesTags: ["facility"]
    }),
    // singleMyBooking: builder.query({
        
    //   query: (id) => ({
    //     url: `/bookings/${id}`,
    //     method: 'GET',
       
       
    //   }),
    // }),


  }),
});

export const {useGetAllBookingsQuery,useCreateAdminMutation,useUpdateFacilityMutation,useAddFacilityMutation ,useGetAllFacilityQuery,useDeleteFacilityMutation} = adminApi;