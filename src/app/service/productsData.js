import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: "https://nike-be.vercel.app"}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "/products",
        }),
    }),
});

export const { useGetAllProductsQuery, useGetAllProductsByIdQuery } = productsApi;
