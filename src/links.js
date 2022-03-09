import React from "react";

const Links = ({ item, index, isDarkMode }) => {
    const checkIfUndefined =
        Object.values(item)[0] === undefined
            ? "Not Available"
            : Object.values(item)[0];

    return (
        <div className="flex gap-4" key={index}>
            <item.image fill={isDarkMode ? "white" : "#4B6A9B"} />
            <p className="text-lightblue dark:text-darkwhite hover:underline cursor-pointer">
                {checkIfUndefined}
            </p>
        </div>
    );
};

export default Links;
