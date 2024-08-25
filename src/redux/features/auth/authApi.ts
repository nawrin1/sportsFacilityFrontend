import { baseApi } from '../../api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: '/auth/login',
        method: 'POST',
        body: userInfo,
      }),
    }),
    register: builder.mutation({
      query: (userInformation) => ({
        url: '/auth/signup',
        method: 'POST',
        body: userInformation,
      }),
    }),
  }),
});

export const { useLoginMutation,useRegisterMutation} = authApi;