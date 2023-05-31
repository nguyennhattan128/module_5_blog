import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
    'user/login',
    async (user) => {
        const res = await axios.post('http://localhost:3001/users/login', user);
        console.log(res.data)
        return res.data;
    })