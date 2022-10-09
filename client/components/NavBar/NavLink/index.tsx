interface Props {
    isSelected?: boolean;
    title: string;
    link?: string;
}

const NavLink = (props: Props) => {
    const { isSelected, link, title } = props;

    const sharedStyles =
        "px-3 py-1 inline-block rounded-xl mr-1 cursor-pointer mb-0";

    if (isSelected) {
        return (
            <a
                className={`${sharedStyles} bg-indigo-800 bg-opacity-90 text-white`}
                href={link || "#"}>
                {title}
            </a>
        );
    }

    return (
        <a
            className={`${sharedStyles} hover:bg-indigo-100 focus:bg-indigo-200 text-indigo-800`}
            href={link || "#"}>
            {title}
        </a>
    );
};

export default NavLink;
