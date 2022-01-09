import { createSlice } from '@reduxjs/toolkit';

interface DataState {
  shopItems: object[];
}

const arg = localStorage.getItem('Item');

if (arg) var parsedArg = JSON.parse(arg);

const initialState: DataState = {
  shopItems: [...parsedArg],
};

export const setShopItems = createSlice({
  name: 'shopItems',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.shopItems = action.payload;
    },
  },
});

export const { addToCart } = setShopItems.actions;

export default setShopItems.reducer;
