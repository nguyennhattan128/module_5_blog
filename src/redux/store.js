import {configureStore} from "@reduxjs/toolkit";
import postReducer from "../redux/posts/postSlice"
import userReducer from "../redux/users/userSlice"
import userInfoReducer from "../redux/users/userInforSlice"

const store = configureStore({
    reducer : {
        posts : postReducer,
        users : userReducer,
        userInfo:  userInfoReducer,
    }
})
export default store