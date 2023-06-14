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
    async (data)=>{
        console.log('da vao addPost')
        console.log('day la data trong createAsyncThunk ', data)
        const res = await customAPI().post(`posts`,data,{ headers: {
                "Content-Type": "multipart/form-data",
            }});
        return res.data;
    }
)

export const deletePost = createAsyncThunk(
    'post/deletePost',
    async (id)=>{
        console.log('da vao deletePost ')
        const res = await customAPI().delete(`posts/${id}`);
        return id;
    }
)
export const findPostById = createAsyncThunk(
    'posts/findPostById',
    async (id) => {
        console.log('da vao findPostById: ')
        const res = await customAPI().get(`posts/admin/${id}`);
        console.log('da vao findPostById: ',res.data)
        return res.data.data;
    }
)
export const editPost = createAsyncThunk(
    'post/editPost',
    async (arg, thunkAPI) => {
        console.log( 'day la arg',arg)
        await customAPI().put(`posts/${arg.id}`, arg.post,{ headers: {
                "Content-Type": "multipart/form-data",
            }}) //Tham số arg là một object chứa id và thông tin sản phẩm mới
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



