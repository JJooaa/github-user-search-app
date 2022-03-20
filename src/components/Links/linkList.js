import { useSelector } from "react-redux";
import Link from "./link";
import { ReactComponent as company } from "../../assets/icon-company.svg";
import { ReactComponent as location } from "../../assets/icon-location.svg";
import { ReactComponent as twitter } from "../../assets/icon-twitter.svg";
import { ReactComponent as website } from "../../assets/icon-website.svg";

const LinkList = ({ theme }) => {
    const links = useSelector((state) => [
        { location: state.currentUser.value.location, image: location },
        { blog: state.currentUser.value.blog, image: website },
        { twitter: state.currentUser.value.twitter, image: twitter },
        { company: state.currentUser.value.company, image: company },
    ]);

    return (
        <div className="flex flex-col sm:flex-row sm:w-[480px] sm:flex-wrap gap-4">
            {links.map((item, index) => (
                <Link item={item} index={index} theme={theme} />
            ))}
        </div>
    );
};

export default LinkList;
