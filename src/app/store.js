import {configureStore} from "@reduxjs/toolkit";
import authSlice from "../slice/authSlice";
import cartSlice from "../features/Cart/slice/cartSlice";
import appSlice from '../slice/appSlice';

const rootReducer = {
    auth: authSlice,
    cart: cartSlice,
    app: appSlice,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;