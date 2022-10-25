interface Props {
    isSelected?: boolean;
    title: string;
}

const NavProfile = (props: Props) => {
    const { isSelected, title } = props;

    const sharedStyles =
        "px-3 py-1 inline-block rounded-lg cursor-pointer mb-0 border transition ease-in-out shadow float-right";

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
            <div className="rounded-md bg-indigo-200 p-1 -m-2 flex mr-2">
                <img
                    src={"/svg/user-solid.svg"}
                    style={{ height: 18, width: 18 }}
                    className="inline-block self-center justify-self-center"
                />
            </div>
            <p className="inline-block mb-0">{title}</p>
        </a>
    );
};

export default NavProfile;
