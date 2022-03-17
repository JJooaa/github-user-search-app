import PropTypes from "prop-types";

const Link = ({ item, index, theme }) => {
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
    theme: PropTypes.string,
};

export default Link;
