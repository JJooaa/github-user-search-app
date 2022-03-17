import React from "react";
import PropTypes from "prop-types";

const Header = ({ currentText, currentIcon, theme, setTheme }) => {
    // function to change the darkmode 
    const handleThemeClick = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    };
    return (
        <div className="flex justify-between w-full items-center">
            <h1 className="text-black text-[26px] dark:text-darkwhite">
                devfinder
            </h1>
            <div
                className="flex items-center cursor-pointer"
                onClick={() => handleThemeClick()}
            >
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
