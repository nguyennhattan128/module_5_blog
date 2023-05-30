import {createSlice} from "@reduxjs/toolkit";
import {login} from "../../service/userService";

const initialState = {
    currentUser: JSON.parse(localStorage.getItem('user'))
}
const useSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
            state.currentUser = action.payload;
            localStorage.setItem('user' , JSON.stringify(action.payload))
        })
            .addCase(login.pending,(state, action)=>{

            })
            .addCase(login.rejected,(state, action)=>{

            })
    }
})

export default useSlice.reducer;