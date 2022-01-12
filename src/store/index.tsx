import { configureStore } from '@reduxjs/toolkit';
import productDataReducer from '../features/getProductsData/produtDataSlice';
import cartItemsReducer from '../features/getCartItems/getCartItems';
import shopItemsReducer from '../features/setShiopItems/setShopItems';
import authStateReducer from '../features/setLogin/setLogin';

const store = configureStore({
  reducer: {
    productData: productDataReducer,
    cartItems: cartItemsReducer,
    shopItems: shopItemsReducer,
    authCheck: authStateReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
