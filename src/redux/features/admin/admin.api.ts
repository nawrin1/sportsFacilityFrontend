import { baseApi } from '../../api/baseApi';

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: () => ({
        url: '/bookings',
        method: 'GET',
       
      }),
      providesTags: ["booking"]
    }),
    createAdmin: builder.mutation({
      query: (data) => ({
        url: '/auth/createadmin',
        method: 'POST',
        body:data

       
      }),
      invalidatesTags:['user']
    }),
    getAllFacility: builder.query({
      query: (pagination) => ({
        url: '/facility',
        method: 'GET',
        params:pagination
       
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
    getSingleFacility: builder.query({
        
      query: (name) => ({
        url: `/facility/${name}`,
        method: 'GET',
       
       
      }),
      providesTags: ["facility"]
    }),



  }),
});

export const {useGetAllBookingsQuery,useCreateAdminMutation,useGetSingleFacilityQuery,useUpdateFacilityMutation,useAddFacilityMutation ,useGetAllFacilityQuery,useDeleteFacilityMutation} = adminApi;