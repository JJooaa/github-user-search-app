import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Link = ({ item, index }) => {
    const theme = useSelector((state) => state.theme.value);

    const itemKey = Object.values(item)[0];
    const checkIfUndefined =
        itemKey === undefined || itemKey === null || itemKey === "" ? (
            <p className="text-grey">Not Available</p>
        ) : (
            <p className="text-lightblue dark:text-darkwhite overflow-hidden sm:max-w-[260px] hover:underline cursor-pointer">
                {Object.values(item)[0]}
            </p>
        );

    return (
        <div className="flex gap-4 grow sm:w-[200px] items-center" key={index}>
            <item.image className="w-8 " fill={!theme ? "white" : "#4B6A9B"} />
            {checkIfUndefined}
        </div>
    );
};

Link.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
};

export default Link;
