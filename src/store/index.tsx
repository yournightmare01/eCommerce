import { configureStore } from '@reduxjs/toolkit';
import productDataReducer from '../features/getProductsData/produtDataSlice';

const store = configureStore({
  reducer: {
    productData: productDataReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
