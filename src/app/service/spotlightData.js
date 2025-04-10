import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotlightApi = createApi({
    reducerPath: "spotlight",
    baseQuery: fetchBaseQuery({ baseUrl: "https://nike-be.vercel.app"}),
    endpoints: (builder) => ({
        getAllspotlight: builder.query({
            query: () => "/spotlight",
        }),
    }),
});

export const { useGetAllspotlightQuery } = spotlightApi;
