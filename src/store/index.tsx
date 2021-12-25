import { configureStore } from '@reduxjs/toolkit';
import productIdsReducer from '../features/productIds/productIdsSlice';
import productDataReducer from '../features/getProductsData/produtDataSlice';

const store = configureStore({
  reducer: {
    productIds: productIdsReducer,
    productData: productDataReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
