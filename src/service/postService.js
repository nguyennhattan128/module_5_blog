import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "./CustomAPI";


export const getAllPost = createAsyncThunk(

    'posts/getAllPost',
    async () => {
        const res = await customAPI().get('posts');
        console.log(res.data)
        return res.data;
    })