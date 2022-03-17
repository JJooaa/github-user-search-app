import axios from "axios";

export const fetchUser = (
    isInitialLoad,
    input,
    removeUnnecessaryProperties,
    setIsFailed
) => {
    setTimeout(async () => {
        try {
            const user = await axios.get(
                `https://api.github.com/users/${
                    isInitialLoad === false ? input : "JJooaa"
                }`
            );
            const res = user.data;
            removeUnnecessaryProperties(res);
        } catch (error) {
            setIsFailed(true);
        }
    }, 2000);
};
