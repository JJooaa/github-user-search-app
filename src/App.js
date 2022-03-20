import { useState, useEffect } from "react";
import Header from "./components/header";
import SearchBar from "./components/searchbar";
import Profile from "./components/profile";
import CircularProgress from "@mui/material/CircularProgress";
import StatList from "./components/Stats/statList";
import LinkList from "./components/Links/linkList";
import Layout from "./components/layout";
import Bio from "./components/bio";
import { ProfileDataWrapper, ProfileWrapper } from "./components/wrappers";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./redux/currentUserSlice";
import { onFirstLoad } from "./redux/themeSlice";

const App = () => {
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const dispatch = useDispatch();

    const user = useSelector((state) => state.currentUser.value);
    const status = useSelector((state) => state.currentUser.status);

    // On initial page load -> Fetch the creator
    useEffect(() => {
        if (isInitialLoad) {
            dispatch(onFirstLoad());
            setTimeout(() => {
                dispatch(fetchUser("JJooaa", isInitialLoad));
                setIsInitialLoad(false);
            }, 2000);
        }
    }, [isInitialLoad, dispatch]);

    // show the loading screen, and if no matches show error text
    if (Object.keys(user).length === 0) {
        return (
            <Layout>
                {status === "idle" && <CircularProgress />}
                <p className="text-blue text-[20px] text-center">
                    {status === "failed" && "User not found, try another one"}
                    {status === "idle" && "Searching for user..."}
                </p>
            </Layout>
        );
    }

    return (
        <Layout>
            <Header />
            <SearchBar />
            <ProfileWrapper>
                <Profile />
                <ProfileDataWrapper>
                    <Bio />
                    <StatList />
                    <LinkList />
                </ProfileDataWrapper>
            </ProfileWrapper>
        </Layout>
    );
};

export default App;
