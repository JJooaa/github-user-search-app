import React, { useState } from "react";
import search from "../assets/icon-search.svg";
import PropTypes from "prop-types";
import { fetchUser } from "../redux/currentUserSlice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    return (
        <div className="w-full rounded-2xl bg-white justify-between dark:bg-darkBlue flex items-center mt-6 px-6 h-[69px] drop-shadow-lg">
            <div className="flex flex-grow">
                <img src={search} alt="search icon" />
                <input
                    placeholder="Search GitHub user..."
                    name="input"
                    value={input}
                    autoComplete="off"
                    onChange={(e) => setInput(e.target.value)}
                    className="ml-4 bg-transparent dark:text-darkwhite overflow-hidden outline-none flex-grow text-black"
                />
            </div>
            <button
                onClick={() => dispatch(fetchUser(input))}
                className="text-white bg-blue px-2 sm:px-6 h-[46px] hover:bg-[#60ABFF] rounded-xl"
            >
                <p>Search</p>
            </button>
        </div>
    );
};

SearchBar.propTypes = {
    fetchUser: PropTypes.func,
};

export default SearchBar;
