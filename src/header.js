import React from "react";

const Header = ({ currentText, currentIcon }) => {
    return (
        <div className="flex justify-between w-full items-center">
            <h1 className="text-black dark:text-darkwhite">devfinder</h1>
            <div className="flex items-center">
                <h4 className="text-lightblue dark:text-darkwhite tracking-[2.5px]">
                    {currentText}
                </h4>

                <img src={currentIcon} alt="icon" className="px-2" />
            </div>
        </div>
    );
};

export default Header;
