import PropTypes from "prop-types";
import { useSelector } from "react-redux";

// "Link" component. Not necessary a link but a reference to eg. twitter, blog
const Link = ({ item, index }) => {
    // fetch the theme from redux store
    const theme = useSelector((state) => state.theme.value);

    const objectValue = Object.values(item)[0];

    // check if the objectKey holds a value, if not render "Not Available"
    const checkIfUndefined =
        objectValue === undefined ||
        objectValue === null ||
        objectValue === "" ? (
            <p className="text-grey">Not Available</p>
        ) : (
            <p className="text-lightblue dark:text-darkwhite overflow-hidden sm:max-w-[260px] hover:underline cursor-pointer">
                {Object.values(item)[0]}
            </p>
        );

    return (
        <div className="flex gap-4 grow sm:w-[200px] items-center" key={index}>
            <item.image className="w-8 " fill={!theme ? "white" : "#4B6A9B"} />
            {checkIfUndefined}
        </div>
    );
};

// check the props passed from <LinkList /> component.
Link.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
};

export default Link;
