import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
    "/currentUser/fetchUser",
    async (input, isInitialLoad) => {
        const response = await axios.get(
            `https://api.github.com/users/${
                isInitialLoad === true ? "JJooaa" : input
            }`
        );
        return response.data;
    }
);

const initialState = {
    value: {},
    status: "idle",
};

const currentUser = createSlice({
    name: "currentUser",
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.value = {};
            state.status = "idle";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.value = { ...state.value, ...action.payload };
            })
            .addCase(fetchUser.rejected, (state) => {
                state.status = "failed";
                state.value = {};
            });
    },
});

export const { reset } = currentUser.actions;

export default currentUser.reducer;
