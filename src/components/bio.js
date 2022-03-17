import React from "react";

const Bio = ({ currentUser }) => {
    return (
        <p className="text-lightblue dark:text-darkwhite">
            {currentUser.user.bio}
        </p>
    );
};

export default Bio;
