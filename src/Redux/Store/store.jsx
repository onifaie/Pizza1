import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slices/Slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;
