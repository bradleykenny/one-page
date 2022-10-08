interface Props {
    title: string;
}

const MagicButton = (props: Props) => {
    const { title } = props;

    return (
        <button
            type="button"
            className="text-white bg-gradient-to-br from-indigo-800 to-indigo-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
            {title}
        </button>
    );
};

export default MagicButton;
