import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./currentUserSlice";

export default configureStore({
    reducer: {
        currentUser: currentUserReducer,
    },
});
