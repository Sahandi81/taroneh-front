import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '@/config/index';

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
        // prepareHeaders(headers) {
        //   // const token = '';
        //   // if (token) {
        //   //   headers.set('Accept', 'application/json');
        //   //   headers.set('authorization', `Bearer ${token}`);
        //   // }
        //   headers.set('Accept', 'application/json');
        //   headers.set('Content-Type', 'application/json');
        //   return headers;
        // }
    }),
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => 'api/categories'
            // keepUnusedDataFor: 0,
        }),
    }),
});

export const {
    useGetCategoriesQuery
} = shopApi;
