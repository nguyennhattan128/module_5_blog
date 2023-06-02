import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "./CustomAPI";


export const getAllPost = createAsyncThunk(

    'posts/getAllPost',
    async () => {
        const res = await customAPI().get('posts');
        return res.data;
    })

export const addPost = createAsyncThunk(

    'post/addPost',
    async (id)=>{
        console.log('da vao addPost')
        const res = await customAPI().post(`posts`);
        return res.data;
    }
)



export const getLikeNumber = createAsyncThunk(

    'comments/getCommentByIdPost',
    async (id)=>{
        console.log('da vao getLikeNumber')
        const res = await customAPI().get(`likes/count/${id}`);
        return res.data;
    }
)



