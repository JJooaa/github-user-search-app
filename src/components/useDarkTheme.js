import { useEffect, useState } from "react";

export const useDarkTheme = () => {
    const [theme, setTheme] = useState(null);

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
        setTheme(localStorage.getItem(storageKey));
    }, []);

    return [theme, setTheme];
};
