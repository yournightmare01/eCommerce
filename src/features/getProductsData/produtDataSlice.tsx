import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getProductData = createAsyncThunk('productData', async () => {
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

interface DataState {
  productData: any;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: DataState = {
  productData: [],
  loading: 'idle',
};

const productDataSlice = createSlice({
  name: 'productData',
  initialState,
  reducers: {
    start(state: any) {
      state.status = 'loading';
    },
    success(state: any, action) {
      state.productData = action.payload;
      state.status = 'success';
    },
    fail(state: any) {
      state.status = 'failed';
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getProductData.pending, (state: any) => {
      state.status = 'loading';
    });
    builder.addCase(getProductData.fulfilled, (state: any, action: any) => {
      state.status = 'succeeded';
      state.productData = action.payload;
    });
    builder.addCase(getProductData.rejected, (state: any) => {
      state.status = 'failed';
    });
  },
});

export default productDataSlice.reducer;
