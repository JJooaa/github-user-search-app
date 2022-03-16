import React from "react";
import PropTypes from "prop-types";

const Header = ({ currentText, currentIcon, theme, setTheme }) => {
    const handleThemeClick = () => {
        if (theme === "dark") {
            localStorage.setItem("github-user-search-theme", "light");
            setTheme("light");
        }
        if (theme === "light") {
            localStorage.setItem("github-user-search-theme", "dark");
            setTheme("dark");
        }
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
