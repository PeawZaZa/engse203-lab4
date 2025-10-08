// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1, price: 1500 }); // สมมติราคา
      } else {
        existingItem.quantity++;
      }
    },
    // BUG: reducer สำหรับ removeItem ยังไม่ได้ถูกสร้างขึ้น
  }
});
export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;