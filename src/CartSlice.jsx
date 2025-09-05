import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    //  Add item to cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // Destructure plant details
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        // If item exists → increase quantity
        existingItem.quantity++;
      } else {
        // If item does not exist → add with quantity = 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Remove item from cart
    removeItem: (state, action) => {
      const nameToRemove = action.payload; // payload should be the plant name
      state.items = state.items.filter(item => item.name !== nameToRemove);
    },

    // Update quantity of an item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // { name: "Snake Plant", quantity: 3 }
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export actions
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer to use in store.js
export default CartSlice.reducer;
