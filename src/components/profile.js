import React from "react";
import { DateTime } from "luxon";

const Profile = ({ user }) => {
    const slicedState = DateTime.fromISO(user.registerDate).toFormat(
        "dd LLL yyyy"
    );

    return (
        <div className="flex gap-7 items-center p-4">
            <img
                src={user.avatar}
                className="w-[70px] rounded-full"
                alt={user.name}
            />

            <div className="flex-col">
                <h1 className="dark:text-darkwhite">{user.name}</h1>
                <h3 className="text-blue order-last">@{user.login}</h3>
                <p className="text-grey dark:text-darkwhite">
                    Joined {slicedState}
                </p>
            </div>
        </div>
    );
};

export default Profile;
