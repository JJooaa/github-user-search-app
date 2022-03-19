import { useState, useEffect, useCallback } from "react";
import { ReactComponent as company } from "./assets/icon-company.svg";
import { ReactComponent as location } from "./assets/icon-location.svg";
import { ReactComponent as twitter } from "./assets/icon-twitter.svg";
import { ReactComponent as website } from "./assets/icon-website.svg";
import Header from "./components/header";
import SearchBar from "./components/searchbar";
import Profile from "./components/profile";
import CircularProgress from "@mui/material/CircularProgress";
import StatList from "./components/Stats/statList";
import LinkList from "./components/Links/linkList";
import { useDarkTheme } from "./components/hooks/useDarkTheme";
import { fetchUser } from "./util/api";
import Layout from "./components/layout";
import Bio from "./components/bio";
import { ProfileDataWrapper, ProfileWrapper } from "./components/wrappers";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser as fetchPlaceholder } from "./redux/currentUserSlice";

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [isFailed, setIsFailed] = useState(false);
    const [theme, setTheme] = useDarkTheme();

    const dispatch = useDispatch();

    // for the first load we fetch "JJooaa" otherwise we fetch for input
    // fetch the user that the input value holds
    const getUser = useCallback(
        (input) => {
            // everytime we fetch we wanna set the current user to empty state to the loading indicator starts
            setCurrentUser(null);
            fetchUser(
                isInitialLoad,
                input,
                removeUnnecessaryProperties,
                setIsFailed
            );
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
        // is the client rendering for the first time
        if (isInitialLoad) {
            dispatch(fetchPlaceholder());
            setIsInitialLoad(false);
            getUser();
        }
    }, [isInitialLoad, getUser]);

    // show the loading screen, and if no matches show error text
    if (currentUser === null) {
        return (
            <Layout theme={theme}>
                {!isFailed && <CircularProgress />}
                <p className="text-blue text-[20px] text-center">
                    {isFailed === false
                        ? "Loading user data..."
                        : "User not found, try another one"}
                </p>
            </Layout>
        );
    }

    return (
        <Layout currentUser={currentUser} isFailed={isFailed} theme={theme}>
            <Header theme={theme} setTheme={setTheme} />
            <SearchBar getUser={getUser} />
            <ProfileWrapper>
                <Profile user={currentUser.user} />
                <ProfileDataWrapper>
                    <Bio currentUser={currentUser} />
                    <StatList currentUser={currentUser} />
                    <LinkList currentUser={currentUser} theme={theme} />
                </ProfileDataWrapper>
            </ProfileWrapper>
        </Layout>
    );
}

export default App;
