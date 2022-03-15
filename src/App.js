import { useState, useEffect, useCallback } from "react";
import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";
import { ReactComponent as company } from "./assets/icon-company.svg";
import { ReactComponent as location } from "./assets/icon-location.svg";
import { ReactComponent as twitter } from "./assets/icon-twitter.svg";
import { ReactComponent as website } from "./assets/icon-website.svg";
import axios from "axios";
import Links from "./components/links";
import Header from "./components/header";
import SearchBar from "./components/searchbar";
import Profile from "./components/profile";
import Stats from "./components/stats";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const [isInitialLoad, setIsInitialLoad] = useState(true);

    const [isFailed, setIsFailed] = useState(false);

    // for the first load we fetch "JJooaa" otherwise we fetch for input
    // fetch the user that the input value holds
    const fetchUser = useCallback(
        (input) => {
            // everytime we fetch we wanna set the current user to empty state to the loading indicator starts
            setCurrentUser(null);
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
        },
        [isInitialLoad]
    );

    // Take only the needed properties from the json object that we fetch
    const removeUnnecessaryProperties = (res) => {
        setCurrentUser({
            user: {
                name: res["name"],
                login: res["login"],
                registerDate: res["created_at"],
                avatar: res["avatar_url"],
                bio: res["bio"],
            },
            stats: [
                { Repos: res["public_repos"] },
                { Followers: res["followers"] },
                { Following: res["following"] },
            ],
            links: [
                { location: res["location"], image: location },
                { blog: res["blog"], image: website },
                { twitter: res["twitter"], image: twitter },
                { company: res["company"], image: company },
            ],
        });
    };

    // On initial page load -> Fetch the creator
    useEffect(() => {
        // Check for the system preference for theme
        // prefersDark returns either true or false
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        if (prefersDark) {
            setIsDarkMode(true);
        }
        // is the client rendering for the first time
        if (isInitialLoad) {
            setIsInitialLoad(false);
            fetchUser();
        }
    }, [isInitialLoad, fetchUser]);

    // show the loading screen, and if no matches show error text
    if (currentUser === null) {
        return (
            <div className="w-screen h-screen bg-lightwhite dark:bg-darkBlack flex flex-col items-center justify-center">
                {!isFailed && <CircularProgress />}
                <p className="text-blue text-[20px] text-center">
                    {isFailed === false
                        ? "Loading user data..."
                        : "User not found, try another one"}
                </p>
            </div>
        );
    }

    const currentIcon = isDarkMode ? sun : moon;
    const currentText = isDarkMode ? "LIGHT" : "DARK";

    return (
        // Window Screen
        <div className="w-screen h-screen bg-lightwhite dark:bg-darkBlack flex items-center justify-center">
            {/* Container for content */}
            <div className="container max-w-[730px] mx-6 flex-col">
                <Header
                    currentIcon={currentIcon}
                    currentText={currentText}
                    isDarkMode={isDarkMode}
                />
                <SearchBar fetchUser={fetchUser} />
                {/* Container for profile */}

                <div className="bg-white dark:bg-darkBlue flex w-full mt-6 rounded-2xl drop-shadow-lg flex-col">
                    <Profile user={currentUser.user} />
                    {/* Container for bio, numbers and links */}
                    <div className="px-6 py-4 gap-6 flex flex-col sm:self-end sm:mr-8 sm:max-w-[520px]">
                        <p className="text-lightblue dark:text-darkwhite">
                            {currentUser.user.bio}
                        </p>
                        <div className="flex justify-evenly text-center py-6 min-w-[249px] sm:w-[480px] bg-lightwhite dark:bg-darkBlack rounded-3xl">
                            {currentUser.stats.map((item, index) => (
                                <Stats item={item} index={index} />
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:w-[480px] sm:flex-wrap gap-4">
                            {currentUser.links.map((item, index) => (
                                <Links
                                    item={item}
                                    index={index}
                                    isDarkMode={isDarkMode}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
