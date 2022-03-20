import { useEffect, useRef } from "react";

// Not currently used but the logic works if we wouldn't use redux
export const useDarkTheme = () => {
    const theme = useRef("");
    useEffect(() => {
        const storageKey = "github-user-search-theme";

        // check the system preference
        const systemColorScheme = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        // check if we have a value in local storage
        if (localStorage.storageKey === "dark" || systemColorScheme) {
            localStorage.setItem(storageKey, "dark");
        } else {
            localStorage.setItem(storageKey, "light");
        }
        theme.current += localStorage.getItem(storageKey);
    }, []);

    return theme;
};
