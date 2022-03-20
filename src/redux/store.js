import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./currentUserSlice";
import themeReducer from "./themeSlice";

export default configureStore({
    reducer: {
        currentUser: currentUserReducer,
        theme: themeReducer,
    },
});
