import React from "react";

const Profile = ({ user }) => {
    return (
        <div className="flex gap-7 items-center p-4">
            <img
                src={user.avatar}
                className="w-[70px] rounded-full"
                alt={user.name}
            />

            <div className="flex-col">
                <h1 className="text-[16px] dark:text-darkwhite">{user.name}</h1>
                <h3 className="text-[13px] text-blue">@{user.login}</h3>
                <p className="text-[13px] text-grey dark:text-darkwhite">
                    Joined {user.registerDate}
                </p>
            </div>
        </div>
    );
};

export default Profile;
