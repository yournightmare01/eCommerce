import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getApiLink } from '../../helper/getApiLink';
const API_LINK = getApiLink();
export const getSingleItem = createAsyncThunk(
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
  singleItem: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: DataState = {
  singleItem: [],
  status: 'idle',
};

const singleItemSlice = createSlice({
  name: 'singleItem',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getSingleItem.pending, (state: any) => {
      state.status = 'loading';
    });
    builder.addCase(getSingleItem.fulfilled, (state: any, action: any) => {
      state.status = 'succeeded';
      state.singleItem = action.payload;
    });
    builder.addCase(getSingleItem.rejected, (state: any) => {
      state.status = 'failed';
    });
  },
});

export default singleItemSlice.reducer;
