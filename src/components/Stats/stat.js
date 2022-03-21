import React from "react";
import PropTypes from "prop-types";

// single stat example eg. Repos, Followers, Following
const Stat = ({ item, index }) => {
    return (
        <div className="flex-col dark:text-darkwhite" key={index}>
            <h4>{Object.keys(item)}</h4>
            <h2>{Object.values(item)}</h2>
        </div>
    );
};

// check the types for the props
Stat.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
};

export default Stat;
