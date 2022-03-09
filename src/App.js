import { useState, useEffect } from "react";
import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";
import { ReactComponent as company } from "./assets/icon-company.svg";
import { ReactComponent as location } from "./assets/icon-location.svg";
import { ReactComponent as twitter } from "./assets/icon-twitter.svg";
import { ReactComponent as website } from "./assets/icon-website.svg";
import axios from "axios";
import Links from "./links";
import Header from "./header";
import SearchBar from "./searchbar";
import Profile from "./profile";
import Stats from "./stats";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [currentUser, setCurrentUser] = useState();
    const [isFailed, setIsFailed] = useState(false);
    // sm breakpoint : 640px; -> phone
    // md breakpoint : 768px; -> size tablet

    const fetchUser = async (input) => {
        try {
            const user = await axios.get(
                `https://api.github.com/users/${input}`
            );
            const res = user.data;
            removeUnnecessaryProperties(res);
        } catch (error) {
            setIsFailed(true);
            console.log(error);
        }
    };

    const removeUnnecessaryProperties = (res) => {
        setCurrentUser({
            user: {
                name: res["name"],
                login: res["login"],
                registerDate: res["created_at"],
                avatar: res["avatar_url"],
                bio: res["bio"],
            },
            links: [
                { location: res["location"], image: location },
                { blog: res["blog"], image: website },
                { twitter: res["twitter"], image: twitter },
                { company: res["company"], image: company },
            ],
            stats: [
                { Repos: res["public_repos"] },
                { Followers: res["followers"] },
                { Following: res["following"] },
            ],
        });
    };

    useEffect(() => {
        const fetchCreator = async () => {
            try {
                const user = await axios.get(
                    `https://api.github.com/users/octocat`
                );
                const res = user.data;
                removeUnnecessaryProperties(res);
            } catch (error) {
                setIsFailed(true);
            }
        };
        fetchCreator();
    }, []);

    console.log(currentUser);
    if (!currentUser) {
        return <div>Loading...</div>;
    }

    const currentIcon = isDarkMode ? sun : moon;
    const currentText = isDarkMode ? "LIGHT" : "DARK";

    return (
        <div className="w-screen h-screen bg-lightwhite dark:bg-darkBlack flex items-center justify-center">
            <div className="container max-w-[730px] mx-6 flex-col">
                <Header currentIcon={currentIcon} currentText={currentText} />
                <SearchBar fetchUser={fetchUser} />
                <div className="bg-white dark:bg-darkBlue w-full mt-6 rounded-2xl drop-shadow-lg flex-col">
                    <Profile user={currentUser.user} />
                    <div className="px-6 py-4 gap-6 flex flex-col">
                        <p className="text-[13px] text-lightblue dark:text-darkwhite">
                            {currentUser.user.bio}
                        </p>
                        <div className="flex justify-evenly text-center py-6 max-w-[480px] min-w-[249px] bg-lightwhite dark:bg-darkBlack rounded-3xl">
                            {currentUser.stats.map((item, index) => (
                                <Stats item={item} index={index} />
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 ">
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
