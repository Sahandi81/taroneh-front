import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isUserLoggedIn: false,
  showProfileDropdown: false,
  showSignOutModal: false,
  Categ:null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
      state.isUserLoggedIn = true;
    },
    toggleProfileDropdown: (state) => {
      state.showProfileDropdown = !state.showProfileDropdown;
    },
    clearCredentials: (state) => {
      state.user = null;
      state.isUserLoggedIn = false;
    },
    toggleSignOutModal: (state) => {
      state.showSignOutModal = !state.showSignOutModal;
      state.user = null;
      state.isUserLoggedIn = false;
    },
    setCateg: (state, action)=>{
      state.Categ = action.payload
    }
  }
});

// Action creators are generated for each case reducer function
export const { setCredentials, toggleProfileDropdown, clearCredentials, toggleSignOutModal, setCateg } = authSlice.actions;

export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isUserLoggedIn;
export const selectShowProfileDropdown = state => state.auth.showProfileDropdown;
export const selectShowSignOutModal = state => state.auth.showSignOutModal;

export default authSlice.reducer;
