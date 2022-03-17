import React from "react";

const Stat = ({ item, index }) => {
    return (
        <div className="flex-col dark:text-darkwhite" key={index}>
            <h4>{Object.keys(item)}</h4>
            <h2>{Object.values(item)}</h2>
        </div>
    );
};

export default Stat;
