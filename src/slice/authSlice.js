import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { refresh} from "../services/authService";






const auth = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        isLoggedIn: false,
        user: {},
    },
    reducers: {
        setLoggedIn: (state, action) => {
            const { user,token } = action.payload;
            state.isLoggedIn = true;
            state.user = user;
            state.token = token;
            state.user = user;

            localStorage.setItem('user_token',token);
        },
    },

})

const { reducer, actions } = auth;

export const { setLoggedIn } = actions;
export default reducer;