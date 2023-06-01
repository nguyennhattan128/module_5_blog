import {createSlice} from "@reduxjs/toolkit";
import {getUser} from "../../service/userService";

const initialState = {
    currentUser: {}
}
const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getUser.fulfilled, (state, action) => {
                state.currentUser = action.payload;
            })
    }
})

export default userInfoSlice.reducer;