import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => {
        return {
          url: '/api/token/',
          method: 'post',
          body
        }
      }
    })
  })
})
export const {useLoginUserMutation} = authApi

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const authApi = createApi({

//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (credentials) => ({
//         url: '/api/token/',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//   }),
// })

// export const { useLoginMutation } = authApi
