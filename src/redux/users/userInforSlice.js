import {createSlice} from "@reduxjs/toolkit";
import {getUser} from "../../service/userService";

const initialState = {
    currentUser: []
}
const useSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getUser.fulfilled, (state, action) => {
                state.currentUser = action.payload;

            })
    }
})

export default useSlice.reducer;