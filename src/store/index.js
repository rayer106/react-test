import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import productReducer from './slices/productSlice';
import commissionReducer from './slices/commissionSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    commission: commissionReducer,
  },
});

export default store;