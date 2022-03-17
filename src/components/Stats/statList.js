import Stat from "./stat";
import PropTypes from "prop-types";

const StatList = ({ currentUser }) => {
    return (
        <div className="flex justify-evenly text-center py-6 min-w-[249px] sm:w-[480px] bg-lightwhite dark:bg-darkBlack rounded-3xl">
            {currentUser.stats.map((item, index) => (
                <Stat item={item} index={index} />
            ))}
        </div>
    );
};

StatList.propTypes = {
    currentUser: PropTypes.object,
};

export default StatList;
