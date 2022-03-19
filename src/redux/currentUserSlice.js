import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
    "/currentUser/fetchUser",
    async () => {
        const response = await axios.get("https://api.github.com/users/JJooaa");
        return response.data;
    }
);

const currentUser = createSlice({
    name: "currentUser",
    initialState: {
        value: {},
        status: "idle",
        error: "null",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.value = Object.assign(state.value, action.payload);
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default currentUser.reducer;
