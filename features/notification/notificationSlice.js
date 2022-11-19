import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hidden: true,
  status: null,
  message: ''
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.hidden = false;
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    hideNotification: state => {
      state.hidden = true;
      state.status = null;
      state.message = '';
    }
  }
});

// Action creators are generated for each case reducer function
export const { showNotification, hideNotification } = notificationSlice.actions;

export const selectHidden = state => state.notification.hidden;
export const selectStatus = state => state.notification.status;
export const selectMessage = state => state.notification.message;

export default notificationSlice.reducer;
