import { useSelector } from "react-redux";

const Layout = ({ children, theme }) => {
    const user = useSelector((state) => state.currentUser.value);
    return (
        <main className={theme}>
            <div className="w-screen h-screen bg-lightwhite dark:bg-darkBlack flex items-center justify-center">
                {user && (
                    <div className="container max-w-[730px] mx-6 flex-col">
                        {children}
                    </div>
                )}
                {!user && (
                    <div className="flex flex-col items-center gap-5">
                        {children}
                    </div>
                )}
            </div>
        </main>
    );
};

export default Layout;
