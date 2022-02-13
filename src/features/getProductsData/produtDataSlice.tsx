import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getApiLink } from '../../helper/getApiLink';
const API_LINK = getApiLink();
export const getProductData = createAsyncThunk(
  'productData',
  async (apiLink: string = API_LINK) => {
    const response = await fetch('http://localhost:5000/desc');

    const data = await response.json();
    return data;
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

  extraReducers: builder => {
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
