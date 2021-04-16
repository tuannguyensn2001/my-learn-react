import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {addToCart,getCart} from "../services";

const fetchAPIAddToCart = createAsyncThunk('cart/fetchAPIAddToCart',async ({courseId,userId},thunkAPI) => {
    const response = await addToCart({
        courseId,
        userId
    })

    return response.data;
})

const fetchAPIGetCart = createAsyncThunk('cart/fetchAPIGetCart',async (params,thunkAPI) => {
    const response = await getCart();
    return response.data;
})


const cart = createSlice({
    name: 'cart',
    initialState: {
        courseList: [],
    },
    reducers: {
        addCourse(state,action){
            console.log(action);
            const {course} = action.payload;
            state.courseList.push(course);
        }
    },
    extraReducers: {
        [fetchAPIAddToCart.fulfilled]: (state,action) => {
            state.courseList.push(action.payload.course);
        },
        [fetchAPIGetCart.fulfilled]: (state,action) => {
            state.courseList = action.payload.cart;
        }
    }
})

const {reducer,actions} = cart;

export const {addCourse} = actions;
export {
    fetchAPIAddToCart,
    fetchAPIGetCart
}

export default reducer;