import {configureStore} from "@reduxjs/toolkit";
import authSlice from "../slice/authSlice";
import cartSlice from "../features/Cart/slice/cartSlice";

const rootReducer = {
    auth: authSlice,
    cart: cartSlice
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;