import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const authApi  = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:8000/api/"
    }),

    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (body) => {
                 return {
                     url: "/token/",
                     method: "post",
                     body,
                 }
            }
        }),
        getProfile: builder.query({
            query: () => ({
              url: "/account/", 
              method: "get",
            }),
          }),
        }),
      
    })
    


export const { useLoginUserMutation, useGetProfileQuery} = authApi;