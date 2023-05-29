import {configureStore} from "@reduxjs/toolkit";
import postReducer from "../redux/posts/postSlice"
import userReducer from "../redux/users/userSlice"

const store = configureStore({
    reducer : {
        posts : postReducer,
        users : userReducer
    }
})
export default store