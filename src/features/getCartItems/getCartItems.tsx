import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCartItems = createAsyncThunk(
  'cartItems',

  async () => {
    const response = await fetch(
      'https://ecommerce-177d7-default-rtdb.europe-west1.firebasedatabase.app/sneakers.json'
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const responseData = await response.json();

    const loadedData: any = [];

    for (const key in responseData) {
      loadedData.push({
        id: responseData[key].id,
        amount: responseData[key].amount,
      });
    }

    return loadedData;
  }
);

interface DataState {
  cartItems: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: DataState = {
  cartItems: [],
  status: 'idle',
};

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state: any) => {
      state.status = 'loading';
    });
    builder.addCase(getCartItems.fulfilled, (state: any, action: any) => {
      state.status = 'succeeded';
      state.cartItems = action.payload;
    });
    builder.addCase(getCartItems.rejected, (state: any) => {
      state.status = 'failed';
    });
  },
});

export default cartItemsSlice.reducer;
