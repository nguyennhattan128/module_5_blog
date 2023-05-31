import {createSlice} from "@reduxjs/toolkit";
import {getAllPost} from "../../service/postService";



const productSlice = createSlice({
    name: 'posts',
    initialState: {
        list: [],
        status: false
    },
    extraReducers: builder => {
        builder
            .addCase(getAllPost.fulfilled, (state, action) => {
                state.list = action.payload;
                state.status = false;
            })
            .addCase(getAllPost.pending,(state, action)=>{
                state.status = true
            })
    }

});

export default productSlice.reducer