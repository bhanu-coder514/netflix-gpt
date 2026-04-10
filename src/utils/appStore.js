import { configureStore } from "@reduxjs/toolkit";
import userReducres from "./userSlice";
import moviesReducers from "./moviesSlice";
import GptReducers from "./gptSlice";
import configReducers from "./configSlice";

const appStore = configureStore({
        reducer: {
            // it will take reducres from multiple slices 
            user: userReducres,
            movies:moviesReducers,
            GptSearch:GptReducers,
            config:configReducers,
        }
    });

export default appStore;