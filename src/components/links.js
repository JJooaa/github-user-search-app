import PropTypes from "prop-types";

const Links = ({ item, index, isDarkMode }) => {
    const itemKey = Object.values(item)[0];
    const checkIfUndefined =
        itemKey === undefined || itemKey === null || itemKey === "" ? (
            <p className="text-grey">Not Available</p>
        ) : (
            <p className="text-lightblue dark:text-darkwhite hover:underline cursor-pointer">
                {Object.values(item)[0]}
            </p>
        );

    return (
        <div className="flex gap-4" key={index}>
            <item.image fill={isDarkMode ? "white" : "#4B6A9B"} />
            {checkIfUndefined}
        </div>
    );
};

Links.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
    isDarkMode: PropTypes.bool,
};

export default Links;
