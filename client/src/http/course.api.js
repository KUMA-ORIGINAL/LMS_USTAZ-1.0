import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api", // Assuming the base URL for course endpoints is the same
    prepareHeaders: (headers) => {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = user.tokens.access
      console.log(token);
      if (user) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getCourseById: builder.query({
      query: (courseId) => {
        return {
          url: `/course/${courseId}/`,
          method: "get",
        };
      },
    }),
  }),
});

export const { useGetCourseByIdQuery } = courseApi;
