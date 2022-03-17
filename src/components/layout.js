const Layout = ({ children, currentUser, theme }) => {
    return (
        <main className={theme}>
            <div className="w-screen h-screen bg-lightwhite dark:bg-darkBlack flex items-center justify-center">
                {currentUser && (
                    <div className="container max-w-[730px] mx-6 flex-col">
                        {children}
                    </div>
                )}
                {!currentUser && (
                    <div className="flex flex-col items-center gap-5">
                        {children}
                    </div>
                )}
            </div>
        </main>
    );
};

export default Layout;
