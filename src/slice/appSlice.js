import {createSlice} from "@reduxjs/toolkit";

const app = createSlice({
    name: 'app',
    initialState: {
        isLoading: false,
    },
    reducers: {
        setIsLoading: (state,action) => {
            state.isLoading = action.payload;
        }
    }
})

const {reducer,actions} = app;
export const {setIsLoading} = actions;

export default reducer;