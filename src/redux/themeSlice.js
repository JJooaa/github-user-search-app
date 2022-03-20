import { createSlice } from "@reduxjs/toolkit";

const storageKey = "github-user-search-theme";

const themeSlice = createSlice({
    name: "theme",
    initialState: { value: "" },
    reducers: {
        onFirstLoad: (state) => {
            const systemColorScheme = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            if (storageKey in localStorage) {
                state.value = localStorage.getItem(storageKey);
            } else if (!(storageKey in localStorage) && systemColorScheme) {
                localStorage.setItem(storageKey, "dark");
            } else {
                localStorage.setItem(storageKey, "light");
            }
            state.value = localStorage.getItem(storageKey);
        },
        changeTheme: (state) => {
            if (state.value === "dark") {
                state.value = "light";
                localStorage.setItem(storageKey, "light");
            } else {
                state.value = "dark";
                localStorage.setItem(storageKey, "dark");
            }
        },
    },
});
export const { onFirstLoad, changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
