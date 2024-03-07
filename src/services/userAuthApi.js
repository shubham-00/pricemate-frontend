import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: 'signup/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json'
          }
        }
      }
    })
  }),
})

export const { useRegisterUserMutation } = userAuthApi