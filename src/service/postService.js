import {createAsyncThunk} from "@reduxjs/toolkit";
import CustomAPI from "./CustomAPI";


export const getAllPost = createAsyncThunk(
    'posts/getAllPost',
    async () => {
        const res = await CustomAPI().get('posts');
        console.log(res.data)
        return res.data;
    })