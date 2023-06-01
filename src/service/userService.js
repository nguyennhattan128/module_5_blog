import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import customAPI from "./CustomAPI";

export const login = createAsyncThunk(
    'user/login',
    async (user) => {
        const res = await axios.post('http://localhost:3001/users/login', user);
        console.log(res.data)
        return res.data;
    })

export const getUser =  createAsyncThunk(
    'userInfo/getUser', // cai nay ngu phai nghien cuu lai
    async (id) => {
        const res = await customAPI().get( `users/${id}`);
        return res.data;
    })