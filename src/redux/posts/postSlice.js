import {createSlice} from "@reduxjs/toolkit";



const productSlice = createSlice({
    name: 'posts',
    initialState: {
        list: [],

    },

});

export default productSlice.reducer