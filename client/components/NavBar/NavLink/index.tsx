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
                className={`${sharedStyles} border-indigo-800 bg-indigo-800 bg-opacity-90 text-white hover:border-indigo-900 hover:bg-indigo-900 hover:text-indigo-100`}
                href={link || "#"}
            >
                {title}
            </a>
        );
    }

    return (
        <a
            className={`${sharedStyles} text-indigo-800 hover:border-indigo-200 hover:bg-indigo-50 focus:bg-indigo-100`}
            href={link || "#"}
        >
            {title}
        </a>
    );
};

export default NavLink;
