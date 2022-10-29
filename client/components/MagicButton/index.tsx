interface Props {
    onClick?: () => Promise<void>;
    title: string;
}

const MagicButton = (props: Props) => {
    const { onClick, title } = props;

    const handleOnClick = async () => {
        await onClick?.();
    };

    return (
        <button
            type="button"
            onClick={handleOnClick}
            className="text-white bg-gradient-to-br from-indigo-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-indigo-300 font-medium rounded-md text-sm px-4 py-2 text-center transition ease-in-out transition-500 shadow">
            {title}
        </button>
    );
};

export default MagicButton;
