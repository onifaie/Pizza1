import { createSlice, isAction } from "@reduxjs/toolkit";
const initalState = {
  products: [],
  quantiy: 0,
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addproduct: (state, action) => {
      state.products.push(action.payload);
      state.quantiy += 1;
      state.total += action.payload.price * action.payload.quantiy;
    },
    reast: (state) => {
      state.products = [];
      state.quantiy = 0;
      state.total = 0;
    },
  },
});
export const (addproduct, reast) = cartSlice.actions
export default cartSlice.reducers