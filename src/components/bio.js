import React from "react";
import { useSelector } from "react-redux";

const Bio = () => {
    const user = useSelector((state) => state.currentUser.value);

    return <p className="text-lightblue dark:text-darkwhite">{user.bio}</p>;
};

export default Bio;
