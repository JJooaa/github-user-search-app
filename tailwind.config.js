module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                // Light mode settings
                blue: "#0079FF", // for both light and dark // button, search img, githubname
                grey: "#697C9A", // For unavailable information
                lightblue: "#4B6A9B", // paragraps
                black: "#2B3442", // info bold
                lightwhite: "#F6F8FF", // background color
                white: "#FEFEFE", // card background
                // dark settings here
                darkwhite: "#FFFFFF", // paragraphs
                darkBlack: "#141D2F", // background
                darkBlue: "#1E2A47", // card background
            },
            fontFamily: {
                mono: ["Space Mono", "sans-serif"]
            }
        },
    },
    plugins: [],
};
