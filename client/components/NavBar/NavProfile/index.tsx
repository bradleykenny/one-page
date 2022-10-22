interface Props {
    isSelected?: boolean;
    title: string;
}

const NavProfile = (props: Props) => {
    const { isSelected, title } = props;

    const sharedStyles =
        "px-3 py-1 inline-block rounded-lg mr-2 cursor-pointer mb-0 border transition ease-in-out shadow float-right";

    if (isSelected) {
        return (
            <p
                className={`${sharedStyles} bg-indigo-800 bg-opacity-90 text-white`}>
                {title}
            </p>
        );
    }

    return (
        <a
            className={`${sharedStyles} hover:bg-indigo-100 hover:border-indigo-200 focus:bg-indigo-200 text-indigo-800 flex items-center`}
            href="#">
            <img
                src={"/svg/user-solid.svg"}
                style={{ height: 18, width: 18 }}
                className="inline-block mr-2 self-center justify-self-center"
            />
            <p className="inline-block mb-0">{title}</p>
        </a>
    );
};

export default NavProfile;
