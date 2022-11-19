import { createSlice } from '@reduxjs/toolkit';
import {
  addItemToCart,
  removeItemFromCart,
  calculateCartItemsTotalPrice
} from './cartUtils';

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

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: state => {
      state.hidden = !state.hidden;
    },
    toggleCartMobile: state => {
      state.hiddenMobile = !state.hiddenMobile;
    },
    addItem: (state, action) => {
      state.items = addItemToCart(state.items, action.payload);
    },
    removeItem: (state, action) => {
      state.items = removeItemFromCart(state.items, action.payload);
    },
    clearItemFromCart: (state, action) => {
      state.items = state.items.filter(
        cartItem => cartItem.id !== action.payload.id
      );
    },
    setCartItems: (state, action) => {
      state.items = action.payload;
    },
    addDiscount: (state, action) => {
      state.discount_code = action.payload;
    },
    createFactor: (state, action) => {
      state.factor = action.payload;
    },
    removeDiscount: (state, action) => {
      state.discount_code = null;
    },

    setCartDetails: (state, action) => {
      state.details = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { toggleCart, toggleCartMobile, addItem, removeItem, clearItemFromCart, setCartItems, addDiscount, setCartDetails } =
  cartSlice.actions;

export const selectHidden = state => state.cart.hidden;
export const selectHiddenMobile = state => state.cart.hiddenMobile;
export const selectCartItems = state => state.cart.items;
export const selectCartItemsCount = state => state.cart.items?.length;
export const selectCartTotalPrice = state =>
  calculateCartItemsTotalPrice(state.cart.items);
export const getCartDiscount = state => state.cart.discount_code;
export const selectFactor = state => state.cart.factor;
export default cartSlice.reducer;
export const selectCartDetails = state => state.cart.details;
