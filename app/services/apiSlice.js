import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NEXT_URL } from '@/config/index';
import { createSelector } from '@reduxjs/toolkit';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  tagTypes: ['WishList', 'Profile', 'Products'],
  baseQuery: fetchBaseQuery({
    baseUrl: NEXT_URL
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
    getProducts: builder.query({
      query: () => 'api/products',
      providesTags: ['Products'],
    }),
    getSingleProduct: builder.query({
      query: productId => `api/products/single?id=${productId}`,
      providesTags: ['Products'],
    }),
    getUserDetails: builder.query({
      query: () => 'api/user_details',
      providesTags: ['Profile']
    }),
    getCart: builder.query({
      query: () => 'api/cart'
    }),

    getWishList: builder.query({
      query: () => 'api/wish_list',
      transformResponse: resposne => resposne.data,
      providesTags: ['WishList']
    }),

    getUserAddresses: builder.query({
      query: () => 'api/user_addresses'
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: 'api/login',
        method: 'POST',
        body: credentials
      }),
      transformResponse: response => response.data,
      invalidatesTags: ['Profile']
    }),

    completeProfile: builder.mutation({
      query: credentials => ({
        url: 'api/complete_profile',
        method: 'PUT',
        body: credentials
      }),
      transformResponse: response => response.data,
      invalidatesTags: ['Profile']
    }),

    logout: builder.mutation({
      query: () => ({
        url: 'api/logout',
        method: 'GET'
      }),
      invalidatesTags: ['Profile']
    }),

    sendVerificationCode: builder.mutation({
      query: phone => ({
        url: 'api/send_verification_code',
        method: 'POST',
        body: { phone }
      })
    }),

    verifyCode: builder.mutation({
      query: phoneAndCode => ({
        url: 'api/verify_code',
        method: 'POST',
        body: phoneAndCode
      })
    }),

    buy: builder.mutation({
      query: cartItems => ({
        url: 'api/buy',
        method: 'POST',
        body: cartItems
      })
    }),

    addToWishList: builder.mutation({
      query: (product_id) => ({
        url: `api/add_to_wish_list`,
        method: 'POST',
        body: { product_id }
      }),
      invalidatesTags: ['WishList']
    }),

    addAddress: builder.mutation({
      query: (address) => ({
        url: `api/update_profile`,
        method: 'PATCH',
        body: { address }
      })
    }),
    deleteWishList: builder.mutation({
      query: (post) => ({
        url: `api/delete_in_wish_list`,
        method: "DELETE",
        body: post
      }),
      providesTags: ['WishList']
    }),

    getGatewayLink: builder.mutation({
      query: ({ order_id }) => ({
        url: `api/gateway`,
        method: "POST",
        body: { order_id }
      })
    }),
    addContactMessage: builder.mutation({
      query: (data) => ({
        url: `api/contact`,
        method: "POST",
        body: data
      })
    }),
    costPost: builder.mutation({
      query: (data) => ({
        url: `api/post_cost`,
        method: "GET",
        body: data
      })
    }),
    getShoppingHistory: builder.query({
      query: () => `api/shopping_history`
    }),
    deleteAddress: builder.mutation({
      query: (data) => ({
        url: `api/deleteAddress`,
        method: "DELETE",
        body: data
      })
    }),
    // postMessage: builder.mutation({
    //   query:'api/',
    //   method: "POST",
    //   body: { order_id }
    // })
  }),


});

export const {
  useGetProductsQuery,
  useGetUserDetailsQuery,
  useGetCartQuery,
  useGetWishListQuery,

  useLoginMutation,
  useLogoutMutation,
  useCompleteProfileMutation,
  useSendVerificationCodeMutation,
  useVerifyCodeMutation,
  useBuyMutation,
  useAddToWishListMutation,

  useAddAddressMutation,

  useGetGatewayLinkMutation,
  useGetShoppingHistoryQuery,
  useDeleteWishListMutation,
  useAddContactMessageMutation,
  useDeleteAddressMutation,
  useCostPostMutation
} = apiSlice;


export const selectWishList = apiSlice.endpoints.getWishList.select()
export const selectWishListItems = createSelector(
  selectWishList,
  wishListResult => wishListResult?.data ?? []
);

export const isProductInWishList = createSelector(
  selectWishListItems,
  (state, productId) => productId,
  (wishListItems, productId) => wishListItems.find(item => item.product_info?._id === productId)
)
// export const isProductInWishList = createSelector(
//   selectWishListItems,
//   (state, productId) => productId,
//   (wishListItems, productId) => wishListItems.find(item => item.product_info?._id === productId)
// )
export const selectUserDetails = apiSlice.endpoints.getUserDetails.select()
export const selectUserAddresses = createSelector(
  selectUserDetails,
  userDetails => userDetails?.data?.user?.address ?? []
)