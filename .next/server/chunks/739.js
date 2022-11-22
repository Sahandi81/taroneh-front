"use strict";
exports.id = 739;
exports.ids = [739];
exports.modules = {

/***/ 6558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IM": () => (/* binding */ useGetGatewayLinkMutation),
/* harmony export */   "K7": () => (/* binding */ useGetWishListQuery),
/* harmony export */   "Qk": () => (/* binding */ useAddContactMessageMutation),
/* harmony export */   "VW": () => (/* binding */ useAddToWishListMutation),
/* harmony export */   "WQ": () => (/* binding */ useVerifyCodeMutation),
/* harmony export */   "YA": () => (/* binding */ useLoginMutation),
/* harmony export */   "Zx": () => (/* binding */ useCostPostMutation),
/* harmony export */   "_y": () => (/* binding */ useLogoutMutation),
/* harmony export */   "bI": () => (/* binding */ selectUserAddresses),
/* harmony export */   "co": () => (/* binding */ useGetUserDetailsQuery),
/* harmony export */   "ct": () => (/* binding */ useDeleteAddressMutation),
/* harmony export */   "dZ": () => (/* binding */ selectWishListItems),
/* harmony export */   "eP": () => (/* binding */ useCompleteProfileMutation),
/* harmony export */   "f4": () => (/* binding */ useGetShoppingHistoryQuery),
/* harmony export */   "gk": () => (/* binding */ apiSlice),
/* harmony export */   "jg": () => (/* binding */ useDeleteWishListMutation),
/* harmony export */   "nQ": () => (/* binding */ useSendVerificationCodeMutation),
/* harmony export */   "q0": () => (/* binding */ isProductInWishList),
/* harmony export */   "ro": () => (/* binding */ useBuyMutation),
/* harmony export */   "sH": () => (/* binding */ useAddAddressMutation)
/* harmony export */ });
/* unused harmony exports useGetProductsQuery, useGetCartQuery, selectWishList, selectUserDetails */
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2500);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);



const apiSlice = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "apiSlice",
    tagTypes: [
        "WishList",
        "Profile",
        "Products"
    ],
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: _config_index__WEBPACK_IMPORTED_MODULE_2__/* .NEXT_URL */ .G
    }),
    endpoints: (builder)=>({
            getProducts: builder.query({
                query: ()=>"api/products",
                providesTags: [
                    "Products"
                ]
            }),
            getSingleProduct: builder.query({
                query: (productId)=>`api/products/single?id=${productId}`,
                providesTags: [
                    "Products"
                ]
            }),
            getUserDetails: builder.query({
                query: ()=>"api/user_details",
                providesTags: [
                    "Profile"
                ]
            }),
            getCart: builder.query({
                query: ()=>"api/cart"
            }),
            getWishList: builder.query({
                query: ()=>"api/wish_list",
                transformResponse: (resposne)=>resposne.data,
                providesTags: [
                    "WishList"
                ]
            }),
            getUserAddresses: builder.query({
                query: ()=>"api/user_addresses"
            }),
            login: builder.mutation({
                query: (credentials)=>({
                        url: "api/login",
                        method: "POST",
                        body: credentials
                    }),
                transformResponse: (response)=>response.data,
                invalidatesTags: [
                    "Profile"
                ]
            }),
            completeProfile: builder.mutation({
                query: (credentials)=>({
                        url: "api/complete_profile",
                        method: "PUT",
                        body: credentials
                    }),
                transformResponse: (response)=>response.data,
                invalidatesTags: [
                    "Profile"
                ]
            }),
            logout: builder.mutation({
                query: ()=>({
                        url: "api/logout",
                        method: "GET"
                    }),
                invalidatesTags: [
                    "Profile"
                ]
            }),
            sendVerificationCode: builder.mutation({
                query: (phone)=>({
                        url: "api/send_verification_code",
                        method: "POST",
                        body: {
                            phone
                        }
                    })
            }),
            verifyCode: builder.mutation({
                query: (phoneAndCode)=>({
                        url: "api/verify_code",
                        method: "POST",
                        body: phoneAndCode
                    })
            }),
            buy: builder.mutation({
                query: (cartItems)=>({
                        url: "api/buy",
                        method: "POST",
                        body: cartItems
                    })
            }),
            addToWishList: builder.mutation({
                query: (product_id)=>({
                        url: `api/add_to_wish_list`,
                        method: "POST",
                        body: {
                            product_id
                        }
                    }),
                invalidatesTags: [
                    "WishList"
                ]
            }),
            addAddress: builder.mutation({
                query: (address)=>({
                        url: `api/update_profile`,
                        method: "PATCH",
                        body: {
                            address
                        }
                    })
            }),
            deleteWishList: builder.mutation({
                query: (post)=>({
                        url: `api/delete_in_wish_list`,
                        method: "DELETE",
                        body: post
                    }),
                providesTags: [
                    "WishList"
                ]
            }),
            getGatewayLink: builder.mutation({
                query: ({ order_id  })=>({
                        url: `api/gateway`,
                        method: "POST",
                        body: {
                            order_id
                        }
                    })
            }),
            addContactMessage: builder.mutation({
                query: (data)=>({
                        url: `api/contact`,
                        method: "POST",
                        body: data
                    })
            }),
            costPost: builder.mutation({
                query: (data)=>({
                        url: `api/post_cost`,
                        method: "GET",
                        body: data
                    })
            }),
            getShoppingHistory: builder.query({
                query: ()=>`api/shopping_history`
            }),
            deleteAddress: builder.mutation({
                query: (data)=>({
                        url: `api/deleteAddress`,
                        method: "DELETE",
                        body: data
                    })
            })
        })
});
const { useGetProductsQuery , useGetUserDetailsQuery , useGetCartQuery , useGetWishListQuery , useLoginMutation , useLogoutMutation , useCompleteProfileMutation , useSendVerificationCodeMutation , useVerifyCodeMutation , useBuyMutation , useAddToWishListMutation , useAddAddressMutation , useGetGatewayLinkMutation , useGetShoppingHistoryQuery , useDeleteWishListMutation , useAddContactMessageMutation , useDeleteAddressMutation , useCostPostMutation  } = apiSlice;
const selectWishList = apiSlice.endpoints.getWishList.select();
const selectWishListItems = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectWishList, (wishListResult)=>wishListResult?.data ?? []);
const isProductInWishList = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectWishListItems, (state, productId)=>productId, (wishListItems, productId)=>wishListItems.find((item)=>item.product_info?._id === productId));
// export const isProductInWishList = createSelector(
//   selectWishListItems,
//   (state, productId) => productId,
//   (wishListItems, productId) => wishListItems.find(item => item.product_info?._id === productId)
// )
const selectUserDetails = apiSlice.endpoints.getUserDetails.select();
const selectUserAddresses = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectUserDetails, (userDetails)=>userDetails?.data?.user?.address ?? []);


/***/ }),

/***/ 2655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ shopApi),
/* harmony export */   "N": () => (/* binding */ useGetCategoriesQuery)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2500);


const shopApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "shopApi",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: _config_index__WEBPACK_IMPORTED_MODULE_1__/* .API_URL */ .T
    }),
    endpoints: (builder)=>({
            getCategories: builder.query({
                query: ()=>"api/categories"
            })
        })
});
const { useGetCategoriesQuery  } = shopApi;


/***/ }),

/***/ 2500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ NEXT_URL),
/* harmony export */   "T": () => (/* binding */ API_URL)
/* harmony export */ });
const API_URL = "https://api.taroneh.ir" || 0;
const NEXT_URL = "http://localhost:3000" || 0;


/***/ }),

/***/ 3066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dj": () => (/* binding */ setCredentials),
/* harmony export */   "Pn": () => (/* binding */ selectShowSignOutModal),
/* harmony export */   "Qb": () => (/* binding */ selectIsLoggedIn),
/* harmony export */   "Td": () => (/* binding */ setCateg),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bb": () => (/* binding */ toggleProfileDropdown),
/* harmony export */   "dy": () => (/* binding */ selectUser),
/* harmony export */   "e6": () => (/* binding */ selectShowProfileDropdown),
/* harmony export */   "ub": () => (/* binding */ clearCredentials),
/* harmony export */   "yz": () => (/* binding */ toggleSignOutModal)
/* harmony export */ });
/* unused harmony export authSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    user: null,
    isUserLoggedIn: false,
    showProfileDropdown: false,
    showSignOutModal: false,
    Categ: null
};
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action)=>{
            state.user = action.payload;
            state.isUserLoggedIn = true;
        },
        toggleProfileDropdown: (state)=>{
            state.showProfileDropdown = !state.showProfileDropdown;
        },
        clearCredentials: (state)=>{
            state.user = null;
            state.isUserLoggedIn = false;
        },
        toggleSignOutModal: (state)=>{
            state.showSignOutModal = !state.showSignOutModal;
            state.user = null;
            state.isUserLoggedIn = false;
        },
        setCateg: (state, action)=>{
            state.Categ = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
const { setCredentials , toggleProfileDropdown , clearCredentials , toggleSignOutModal , setCateg  } = authSlice.actions;
const selectUser = (state)=>state.auth.user;
const selectIsLoggedIn = (state)=>state.auth.isUserLoggedIn;
const selectShowProfileDropdown = (state)=>state.auth.showProfileDropdown;
const selectShowSignOutModal = (state)=>state.auth.showSignOutModal;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);


/***/ }),

/***/ 6098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "jX": () => (/* binding */ addItem),
  "X_": () => (/* binding */ clearItemFromCart),
  "ZP": () => (/* binding */ cart_cartSlice),
  "hw": () => (/* binding */ getCartDiscount),
  "cl": () => (/* binding */ removeItem),
  "my": () => (/* binding */ selectCartDetails),
  "D1": () => (/* binding */ selectCartItems),
  "rL": () => (/* binding */ selectCartItemsCount),
  "yq": () => (/* binding */ selectCartTotalPrice),
  "l9": () => (/* binding */ selectHidden),
  "mO": () => (/* binding */ selectHiddenMobile),
  "Vo": () => (/* binding */ setCartDetails),
  "l6": () => (/* binding */ toggleCart),
  "nc": () => (/* binding */ toggleCartMobile)
});

// UNUSED EXPORTS: addDiscount, cartSlice, selectFactor, setCartItems

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./features/cart/cartUtils.js
function addItemToCart(cartItems, cartItemToAdd) {
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === cartItemToAdd.id && cartItem.weight === cartItemToAdd.weight);
    let items = [];
    if (existingCartItem) {
        items = cartItems.map((cartItem)=>cartItem.id === cartItemToAdd.id && cartItem.weight === cartItemToAdd.weight ? {
                ...cartItem,
                quantity: 1 + cartItemToAdd.quantity
            } : cartItem);
        return items;
    }
    items = [
        ...cartItems,
        {
            ...cartItemToAdd,
            quantity: cartItemToAdd.quantity
        }
    ];
    return items;
}
function removeItemFromCart(cartItems, cartItemToRemove) {
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === cartItemToRemove.id && cartItem.weight === cartItemToRemove.weight);
    let items = [];
    if (existingCartItem.quantity === 1) {
        items = cartItems.filter((cartItem)=>cartItem.id !== cartItemToRemove.id && cartItem.weight !== cartItemToRemove.weight);
        return items;
    }
    items = cartItems.map((cartItem)=>cartItem.id === cartItemToRemove.id && cartItem.weight === cartItemToRemove.weight ? {
            ...cartItem,
            quantity: cartItem.quantity - 1
        } : cartItem);
    return items;
}
function calculateCartItemsTotalPrice(cartItems) {
    return cartItems.reduce((accQuantity, cartItem)=>accQuantity + cartItem.quantity * cartItem.price, 0);
}

;// CONCATENATED MODULE: ./features/cart/cartSlice.js


const initialState = {
    hidden: true,
    hiddenMobile: true,
    items: [],
    discount_code: null,
    factor: null,
    details: {
        address: "",
        delivery_time: ""
    }
};
const cartSlice = (0,toolkit_.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        toggleCart: (state)=>{
            state.hidden = !state.hidden;
        },
        toggleCartMobile: (state)=>{
            state.hiddenMobile = !state.hiddenMobile;
        },
        addItem: (state, action)=>{
            state.items = addItemToCart(state.items, action.payload);
        },
        removeItem: (state, action)=>{
            state.items = removeItemFromCart(state.items, action.payload);
        },
        clearItemFromCart: (state, action)=>{
            state.items = state.items.filter((cartItem)=>cartItem.id !== action.payload.id);
        },
        setCartItems: (state, action)=>{
            state.items = action.payload;
        },
        addDiscount: (state, action)=>{
            state.discount_code = action.payload;
        },
        createFactor: (state, action)=>{
            state.factor = action.payload;
        },
        removeDiscount: (state, action)=>{
            state.discount_code = null;
        },
        setCartDetails: (state, action)=>{
            state.details = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
const { toggleCart , toggleCartMobile , addItem , removeItem , clearItemFromCart , setCartItems , addDiscount , setCartDetails  } = cartSlice.actions;
const selectHidden = (state)=>state.cart.hidden;
const selectHiddenMobile = (state)=>state.cart.hiddenMobile;
const selectCartItems = (state)=>state.cart.items;
const selectCartItemsCount = (state)=>state.cart.items?.length;
const selectCartTotalPrice = (state)=>calculateCartItemsTotalPrice(state.cart.items);
const getCartDiscount = (state)=>state.cart.discount_code;
const selectFactor = (state)=>state.cart.factor;
/* harmony default export */ const cart_cartSlice = (cartSlice.reducer);
const selectCartDetails = (state)=>state.cart.details;


/***/ })

};
;