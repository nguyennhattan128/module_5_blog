import {createSlice} from "@reduxjs/toolkit";
import {login} from "../../service/userService";

const initialState = {
    currentUser: {}
}
const useSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.curentUser = action.payload;
            console.log(state.curentUser)
        })
    }
})

export default useSlice.reducer;