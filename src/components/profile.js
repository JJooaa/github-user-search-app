import React from "react";
import { DateTime } from "luxon";

const Profile = ({ user }) => {
    const slicedState = DateTime.fromISO(user.registerDate).toFormat(
        "dd LLL yyyy"
    );

    return (
        <div className="flex gap-7 items-center sm:max-w-none sm:ml-5 sm:gap-12 sm:items-center sm:pb-0 p-4">
            <img
                src={user.avatar}
                className="w-[70px] rounded-full sm:w-[117px]"
                alt={user.name}
            />

            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:items-center sm:w-[500px]">
                <h1 className="dark:text-darkwhite sm:grow ">{user.name}</h1>
                <h3 className="text-blue sm:order-last sm:w-full">
                    @{user.login}
                </h3>
                <p className="text-grey dark:text-darkwhite sm:w-[200px]">
                    Joined {slicedState}
                </p>
            </div>
        </div>
    );
};

export default Profile;
