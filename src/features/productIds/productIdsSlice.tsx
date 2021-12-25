import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getProductIds = createAsyncThunk('productIds', async () => {
  const response = await fetch(
    'https://openapi.etsy.com/v3/application/shops/6504049/shop-sections/listings?shop_section_ids=16265179&limit=15',
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'l3l05s3fsldandekrnr6lmxj',
      },
    }
  );

  const data = await response.json();
  const apiIds = data.results.map((item: any) => item.listing_id);

  const fetchProductData = await fetch(
    `https://openapi.etsy.com/v3/application/listings/batch?listing_ids=${apiIds}&includes=Images&`,
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'l3l05s3fsldandekrnr6lmxj',
      },
    }
  );

  const productData = await fetchProductData.json();
  return productData.results;
});

interface UsersState {
  productIds: any;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: UsersState = {
  productIds: [],
  loading: 'idle',
};

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
