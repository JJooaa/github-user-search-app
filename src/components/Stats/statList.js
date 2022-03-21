import Stat from "./stat";
import { useSelector } from "react-redux";

// render the <Stat item={item} index={index} /> components in a list
const StatList = () => {
    // fetch the necessary data from redux store
    const userStats = useSelector((state) => [
        { Repos: state.currentUser.value.public_repos },
        { Followers: state.currentUser.value.followers },
        { Following: state.currentUser.value.following },
    ]);

    return (
        <div className="flex justify-evenly text-center py-6 min-w-[249px] sm:w-[480px] bg-lightwhite dark:bg-darkBlack rounded-3xl">
            {userStats.map((item, index) => (
                <Stat item={item} index={index} />
            ))}
        </div>
    );
};

export default StatList;
