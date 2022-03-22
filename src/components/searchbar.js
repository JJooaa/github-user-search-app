import React, { useEffect, useRef, useState } from "react";
import search from "../assets/icon-search.svg";
import { fetchUser, reset } from "../redux/currentUserSlice";
import { useDispatch } from "react-redux";

// Search bar with Search button
// add artificial 2 second delay to show a loading screen
const SearchBar = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = () => {
        dispatch(reset());
        setTimeout(() => {
            dispatch(fetchUser(input));
        }, 2000);
    };

    const onEnterPress = (event) => {
        if (event.key === "Enter") {
            handleSubmit();
        }
    };

    return (
        <div className="w-full rounded-2xl bg-white justify-between dark:bg-darkBlue flex items-center mt-6 px-6 h-[69px] drop-shadow-lg">
            <div className="flex flex-grow">
                <img src={search} alt="search icon" />
                <input
                    ref={inputRef}
                    placeholder="Search GitHub user..."
                    name="input"
                    value={input}
                    autoComplete="off"
                    onChange={(e) => setInput(e.target.value)}
                    className="ml-4 bg-transparent dark:text-darkwhite overflow-hidden outline-none flex-grow text-black"
                    onKeyPress={(event) => onEnterPress(event)}
                />
            </div>
            <button
                onClick={handleSubmit}
                className="text-white bg-blue px-2 sm:px-6 h-[46px] hover:bg-[#60ABFF] rounded-xl"
            >
                <p>Search</p>
            </button>
        </div>
    );
};

export default SearchBar;
