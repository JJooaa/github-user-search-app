import { useState } from "react";
import search from "./assets/icon-search.svg";
import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";
import company from "./assets/icon-company.svg";
import location from "./assets/icon-location.svg";
import twitter from "./assets/icon-twitter.svg";
import website from "./assets/icon-website.svg";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // sm breakpoint : 640px; -> phone
    // md breakpoint : 768px; -> size tablet

    const info = [
        {
            image: location,
            text: "San Fransisco",
        },
        {
            image: website,
            text: "https://github.blog",
        },
        {
            image: twitter,
            text: "Not Available",
        },
        {
            image: company,
            text: "@github",
        },
    ];

    const data = [
        {
            text: "Repos",
            number: 8,
        },
        {
            text: "Followers",
            number: 3938,
        },
        {
            text: "Following",
            number: 9,
        },
    ];

    const user = {
        name: "The Octocat",
        handle: "@octocat",
        date: "25 Jan 2011",
    };

    const currentIcon = isDarkMode ? sun : moon;

    return (
        <div className="w-screen h-screen bg-lightwhite dark:bg-darkBlack flex items-center justify-center">
            {/* content here */}
            <div className="container max-w-[730px] mx-6 flex-col">
                {/* logo and light switch */}
                <div className="flex justify-between w-full items-center">
                    <h1 className="text-black">devfinder</h1>
                    <div className="flex items-center">
                        <h4 className="text-lightblue tracking-[2.5px">
                            {isDarkMode === true ? "LIGHT" : "DARK"}
                        </h4>

                        <img src={currentIcon} alt="icon" className="px-2" />
                    </div>
                </div>

                {/* input and search button */}
                <div className="w-full rounded-2xl bg-white justify-between dark:bg-darkBlue flex items-center mt-6 px-6 h-[69px] drop-shadow-lg">
                    <div className="flex">
                        <img src={search} alt="search icon" />
                        <input
                            placeholder="Search GitHub user "
                            className="ml-4 bg-transparent outline-none w-auto text-black"
                        />
                    </div>
                    <button className="text-white bg-blue min-h-fullw px-2 sm:px-6 h-[46px] rounded-xl">
                        Search
                    </button>
                </div>

                {/* Profile */}
                <div className="bg-white dark:bg-darkBlue w-full mt-6 rounded-2xl drop-shadow-lg flex-col">
                    {/* avatar info */}
                    <div className="flex gap-7 items-center p-4">
                        <img className="w-[70px] h-[70px] bg-blue rounded-full" />

                        <div className="flex-col">
                            <h1 className="text-[16px]">{user.name}</h1>
                            <h3 className="text-[13px] text-blue">
                                {user.handle}
                            </h3>
                            <p className="text-[13px] text-grey">
                                Joined {user.date}
                            </p>
                        </div>
                    </div>
                    {/* avatar content */}
                    <div className="px-6 py-4 gap-6 flex flex-col">
                        <p className="text-[13px] text-lightblue">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                        </p>
                        <div className="flex justify-evenly text-center py-6 max-w-[480px] min-w-[249px] bg-lightwhite rounded-3xl">
                            {data.map((item, index) => (
                                <div className="flex-col" key={index}>
                                    <h4>{item.text}</h4>
                                    <h2>{item.number}</h2>
                                </div>
                            ))}
                        </div>
                        {/* Links */}
                        <div className="flex flex-col gap-4">
                            {info.map((item, index) => (
                                <div className="flex gap-4" key={index}>
                                    <img
                                        className="w-5 h-5"
                                        src={item.image}
                                        alt="text"
                                    />
                                    <p className="text-lightblue">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
