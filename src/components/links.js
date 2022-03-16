import PropTypes from "prop-types";

const Links = ({ item, index, theme }) => {
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
            <item.image fill={!theme ? "white" : "#4B6A9B"} />
            {checkIfUndefined}
        </div>
    );
};

Links.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
    theme: PropTypes.bool,
};

export default Links;
