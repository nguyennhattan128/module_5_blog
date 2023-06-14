import {createSlice} from "@reduxjs/toolkit";
import {addPost, deletePost, findPostById, getAllPost} from "../../service/postService";



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
        builder.addCase(addPost.fulfilled,(state,action)=>{
            state.list = [...state.list, action.payload]
        })
       builder.addCase(deletePost.fulfilled,(state, action)=>{
           const id = action.payload;
           const index = state.list.findIndex(item => item.id === id);
           let list =  [...state.list];
           if (index !== -1){
               list.splice(index,1)
           }
           state.list = list
       })
        builder.addCase(findPostById.fulfilled,(state,action)=>{
            state.list =  action.payload
        })
    }
});
export default productSlice.reducer