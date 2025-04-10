import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotlightApi = createApi({
    reducerPath: "spotlight",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    endpoints: (builder) => ({
        getAllspotlight: builder.query({
            query: () => "/spotlight",
        }),
    }),
});

export const { useGetAllspotlightQuery } = spotlightApi;