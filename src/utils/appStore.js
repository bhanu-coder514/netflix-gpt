import { configureStore } from "@reduxjs/toolkit";
import userReducres from "./userSlice";

const appStore = configureStore({
        reducer: {
            // it will take reducres from multiple slices 
            user: userReducres,
        }
    });

export default appStore;