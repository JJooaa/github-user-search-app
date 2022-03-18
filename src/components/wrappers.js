export const ProfileDataWrapper = ({ children }) => {
    return (
        <div className="px-6 py-4 gap-6 flex flex-col sm:self-end sm:mr-8 sm:max-w-[520px]">
            {children}
        </div>
    );
};

export const ProfileWrapper = ({ children }) => {
    return (
        <div className="bg-white dark:bg-darkBlue flex w-full mt-6 rounded-2xl drop-shadow-lg flex-col">
            {children}
        </div>
    );
};
