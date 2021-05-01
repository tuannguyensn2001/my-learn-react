import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {addToCart, deleteCourseFromCart, getCart} from "../services";
import {notification} from "antd";

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

const fetchAPIDeleteCourseFromCart = createAsyncThunk('cart/fetchAPIDeleteCourseFromCart',async ({id},thunkAPI) => {
    const response = await deleteCourseFromCart(id);
    return response.data;
})

const cart = createSlice({
    name: 'cart',
    initialState: {
        courseList: [],
        isLoading: false,
    },
    reducers: {
        addCourse(state,action){
            const {course} = action.payload;
            state.courseList.push(course);
        }
    },
    extraReducers: {
        [fetchAPIAddToCart.fulfilled]: (state,action) => {
            if (!state.courseList.find(item => item.id === parseInt(action.payload.course.id)))
            state.courseList.push(action.payload.course);
            notification['success']({
                message: 'Thêm vào giỏ hàng',
                description:
                    'Bạn đã thêm vào giỏ hàng thành công',
            });
        },
        [fetchAPIGetCart.fulfilled]: (state,action) => {
            state.courseList = action.payload.cart;
        },
        [fetchAPIDeleteCourseFromCart.pending]: (state,action) => {
            state.isLoading = true;
        },
        [fetchAPIDeleteCourseFromCart.fulfilled]: (state,action) => {
            const {id} = action.payload;
            const index = state.courseList.findIndex(course => course.id === parseInt(id));
            state.courseList.splice(index,1);
            state.isLoading = false;
            notification['success']({
                message: 'Notification Title',
                description:
                    'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            });
        },
        [fetchAPIDeleteCourseFromCart.rejected]: (state,action) => {
            state.isLoading = false;
        }

    }
})

const {reducer,actions} = cart;

export const {addCourse} = actions;
export {
    fetchAPIAddToCart,
    fetchAPIGetCart,
    fetchAPIDeleteCourseFromCart
}

export default reducer;