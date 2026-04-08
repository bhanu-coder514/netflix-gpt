import { configureStore } from "@reduxjs/toolkit";
import userReducres from "./userSlice";
import moviesReducers from "./moviesSlice";

const appStore = configureStore({
        reducer: {
            // it will take reducres from multiple slices 
            user: userReducres,
            movies:moviesReducers,
        }
    });

export default appStore;