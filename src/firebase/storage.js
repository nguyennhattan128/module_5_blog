// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTSFHkL33bJDo35X0ZCFyNNro3vSxPVz4",
    authDomain: "module5-blog.firebaseapp.com",
    projectId: "module5-blog",
    storageBucket: "module5-blog.appspot.com",
    messagingSenderId: "151633692880",
    appId: "1:151633692880:web:9a344f84de0e4f9c9776d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);