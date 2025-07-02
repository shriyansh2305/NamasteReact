import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    // This reducer is the main reducer for entire app Store, it contains small reducers
    reducer: {
      // each slice reducer
    cart: cartReducer,
    // user: userReducer, if we could have created userReducer
  }
});

export default appStore;
