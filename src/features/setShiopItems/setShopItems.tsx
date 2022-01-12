import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';

interface DataState {
  shopItems: object[];
}

const initialState: DataState = {
  shopItems: [],
};

export const setShopItems = createSlice({
  name: 'shopItems',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.shopItems = action.payload;
    },
    setInitialShopItems: (state) => {
      const arg = localStorage.getItem('Item');
      if (!arg) return;
      const parsedArg = JSON.parse(arg);
      state.shopItems = [...parsedArg];
    },
  },
});

export const { addToCart, setInitialShopItems } = setShopItems.actions;

export default setShopItems.reducer;
