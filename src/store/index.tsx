import { configureStore } from '@reduxjs/toolkit';
import productIdsReducer from '../features/productIds/productIdsSlice';

const store = configureStore({
  reducer: {
    productIds: productIdsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
