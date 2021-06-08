import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {refresh} from "../services/authService";


const auth = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        isLoggedIn: false,
        user: {},
    },
    reducers: {
        setLoggedIn: (state, action) => {
            const {user, token} = action.payload;
            state.isLoggedIn = true;
            state.user = user;
            state.token = token;
            localStorage.setItem('user_token', token);
        },
        updateCourse: (state, action) => {
            const {course} = action.payload;
            state.user.courses = course;
        },
        setLogOut: (state, action) => {
            state.isLoggedIn = false;
            state.user = {};
            state.token = null;

            localStorage.removeItem('user_token');

        },

    },

})

const {reducer, actions} = auth;

export const {setLoggedIn, updateCourse,setLogOut} = actions;
export default reducer;