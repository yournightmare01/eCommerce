import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getProductIds = createAsyncThunk(
  'productIds',
  async (dispatch, getState) => {
    const response = await fetch(
      'https://openapi.etsy.com/v3/application/shops/6504049/shop-sections/listings?shop_section_ids=16265179&limit=15',
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'l3l05s3fsldandekrnr6lmxj',
        },
      }
    );

    return await response.json();
  }
);

interface UsersState {
  productIds: [];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState = {
  productIds: [],
  loading: 'idle',
} as UsersState;

const productIdsSlice = createSlice({
  name: 'productId',
  initialState,
  reducers: {
    start(state: any) {
      state.status = 'loading';
    },
    success(state: any, action) {
      state.productIds = action.payload;
      state.status = 'success';
    },
    fail(state: any) {
      state.status = 'failed';
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getProductIds.pending, (state: any) => {
      state.status = 'loading';
    });
    builder.addCase(getProductIds.fulfilled, (state: any, action: any) => {
      state.status = 'succeeded';
      state.productIds = action.payload;
    });
    builder.addCase(getProductIds.rejected, (state: any) => {
      state.status = 'failed';
    });
  },
});

export default productIdsSlice.reducer;
