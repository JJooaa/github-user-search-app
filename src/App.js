import { useState } from "react";
import "./App.css";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(null);

    // responsive sizing :

    // container size max width -> 730px;

    // sm breakpoint : 640px; -> What is container sizing then
    // md breakpoint : 768px; -> size

    return (
        <div className="w-screen h-screen bg:lightWhite dark:bg-darkBlack flex items-center justify-center">
            {/* content here */}
            <div className="container max-w-[730px] mx-4 flex-col">
                <div className="flex justify-between w-full items-center">
                    <h1 className="text-black dark:text-darkwhite">
                        devfinder
                    </h1>
                    <div className="flex items-center">
                        <h4 className="text-lightblue tracking-[2.5px] dark:text-white">
                            {isDarkMode === true ? "LIGHT" : "DARK"}
                        </h4>
                        <span>
                            <img className="w-4 h-4 bg-white" alt="icon" />
                        </span>
                    </div>
                </div>
                <div className="w-full rounded-2xl bg-white justify-between dark:bg-darkBlue flex items-center mt-6 px-6 h-[60px]">
                    <div className="flex">
                        <img className="w-6 h-6 bg-blue" />
                        <input className="h-[24px] ml-4 bg-transparent outline-none text-white" />
                    </div>
                    <button className="text-white bg-blue rounded-xl">Search</button>
                </div>
                <div className="bg-white dark:bg-darkBlue h-[440px] w-full mt-6 rounded-2xl"></div>
            </div>
        </div>
    );
}

export default App;
