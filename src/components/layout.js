import { useSelector } from "react-redux";

// layout for the whole page
// if there is no user render a loading layout
// if there is a user render the main page
const Layout = ({ children }) => {
    // fetch the necessary data from redux store
    const user = useSelector((state) => state.currentUser.value);
    const theme = useSelector((state) => state.theme.value);

    return (
        <main className={theme}>
            <div className="w-screen h-screen bg-lightwhite dark:bg-darkBlack flex items-center justify-center">
                {Object.values(user).length !== 0 && (
                    <div className="container max-w-[730px] mx-6 flex-col">
                        {children}
                    </div>
                )}
                {Object.values(user).length === 0 && (
                    <div className="flex flex-col items-center gap-5">
                        {children}
                    </div>
                )}
            </div>
        </main>
    );
};

export default Layout;
