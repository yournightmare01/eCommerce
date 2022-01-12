import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

export const authState = createSlice({
  name: 'isLoggedIn',
  initialState,
  reducers: {
    changeLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { changeLoggedIn } = authState.actions;

export default authState.reducer;
