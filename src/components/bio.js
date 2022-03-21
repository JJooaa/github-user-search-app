import React from "react";
import { useSelector } from "react-redux";

// render the bio
const Bio = () => {
    // fetch bio from currentUser.value in redux store 
    const bio = useSelector((state) => state.currentUser.value.bio);

    return <p className="text-lightblue dark:text-darkwhite">{bio}</p>;
};

export default Bio;
