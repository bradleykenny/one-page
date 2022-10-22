interface Props {
    isSelected?: boolean;
    title: string;
    link?: string;
}

const NavLink = (props: Props) => {
    const { isSelected, link, title } = props;

    const sharedStyles =
        "px-2 py-1 inline-block rounded-lg mr-2 cursor-pointer mb-0 border transition ease-in-out shadow";

    if (isSelected) {
        return (
            <a
                className={`${sharedStyles} bg-indigo-800 border-indigo-800 bg-opacity-90 text-white hover:text-indigo-100 hover:bg-indigo-900 hover:border-indigo-900`}
                href={link || "#"}>
                {title}
            </a>
        );
    }

    return (
        <a
            className={`${sharedStyles} hover:bg-indigo-100 hover:border-indigo-200 focus:bg-indigo-200 text-indigo-800`}
            href={link || "#"}>
            {title}
        </a>
    );
};

export default NavLink;
