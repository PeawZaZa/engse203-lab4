// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer, // กำหนดให้ cart reducer จัดการ state ในส่วนของ cart
  },
});