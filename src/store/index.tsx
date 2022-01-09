import { configureStore } from '@reduxjs/toolkit';
import productDataReducer from '../features/getProductsData/produtDataSlice';
import cartItemsReducer from '../features/getCartItems/getCartItems';
import shopItemsReducer from '../features/setShiopItems/setShopItems';

const store = configureStore({
  reducer: {
    productData: productDataReducer,
    cartItems: cartItemsReducer,
    shopItems: shopItemsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
