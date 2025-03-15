import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import productReducer from "../features/productSlice";
import cartReducer from "../features/cartSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    cart: cartReducer,
  },
});
