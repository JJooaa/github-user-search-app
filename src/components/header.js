import React from "react";
import PropTypes from "prop-types";

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

Header.propTypes = {
    currentText: PropTypes.string,
    currentIcon: PropTypes.string,
};

export default Header;
