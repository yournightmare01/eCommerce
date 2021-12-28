import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getApiLink } from '../../helper/getApiLink';
const API_LINK = getApiLink();
export const getProductData = createAsyncThunk(
  'productData',
  async (apiLink: string = API_LINK) => {
    const response = await fetch(apiLink, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'l3l05s3fsldandekrnr6lmxj',
      },
    });

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
  }
);

interface DataState {
  productData: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: DataState = {
  productData: [],
  status: 'idle',
};

const productDataSlice = createSlice({
  name: 'productData',
  initialState,
  reducers: {},

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
