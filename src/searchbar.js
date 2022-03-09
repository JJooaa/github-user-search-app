import React, { useState } from "react";
import search from "./assets/icon-search.svg";

const SearchBar = ({ fetchUser }) => {
    const [input, setInput] = useState("");
    console.log(input);
    return (
        <div className="w-full rounded-2xl bg-white justify-between dark:bg-darkBlue flex items-center mt-6 px-6 h-[69px] drop-shadow-lg">
            <div className="flex">
                <img src={search} alt="search icon" />
                <input
                    placeholder="Search GitHub user"
                    name="input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="ml-4 bg-transparent dark:text-darkwhite outline-none w-auto text-black"
                />
            </div>
            <button
                onClick={() => fetchUser(input)}
                className="text-white bg-blue min-h-fullw px-2 sm:px-6 h-[46px] rounded-xl"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
