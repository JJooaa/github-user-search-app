import React from "react";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/themeSlice";

const Header = () => {
    const theme = useSelector((state) => state.theme.value);

    const dispatch = useDispatch();

    const currentIcon = theme === "dark" ? sun : moon;
    const currentText = theme === "dark" ? "LIGHT" : "DARK";

    return (
        <div className="flex justify-between w-full items-center">
            <h1 className="text-black text-[26px] dark:text-darkwhite">
                devfinder
            </h1>
            <div
                className="flex items-center cursor-pointer"
                onClick={() => dispatch(changeTheme())}
            >
                <h4 className="text-lightblue dark:text-darkwhite tracking-[2.5px]">
                    {currentText}
                </h4>

                <img src={currentIcon} alt="icon" className="px-2" />
            </div>
        </div>
    );
};

export default Header;
