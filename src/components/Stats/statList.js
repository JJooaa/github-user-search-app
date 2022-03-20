import Stat from "./stat";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const StatList = () => {
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
