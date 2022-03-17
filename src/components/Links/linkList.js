import Link from "./link";

const LinkList = ({ currentUser, theme }) => {
    return (
        <div className="flex flex-col sm:flex-row sm:w-[480px] sm:flex-wrap gap-4">
            {currentUser.links.map((item, index) => (
                <Link item={item} index={index} theme={theme} />
            ))}
        </div>
    );
};

export default LinkList;
