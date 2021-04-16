import {createSlice} from "@reduxjs/toolkit";

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
    }
})

const {reducer,actions} = cart;

export const {addCourse} = actions;

export default reducer;