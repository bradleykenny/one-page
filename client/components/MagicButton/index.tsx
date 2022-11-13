import { ThreeDots } from "react-loader-spinner";

interface Props {
    onClick?: () => Promise<void>;
    title: string;
    isLoading?: boolean;
}

const MagicButton = (props: Props) => {
    const { onClick, title, isLoading } = props;

    const handleOnClick = async () => {
        await onClick?.();
    };

    console.log(isLoading);

    return (
        <button
            type="button"
            onClick={handleOnClick}
            className="text-white bg-gradient-to-br from-indigo-500 to-orange-500 focus:ring-2 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg px-3 py-1 text-center transition-all ease-in-out transition-500 shadow hover:bg-right bg-200% text-md border-indigo-200 border">
            {!isLoading ? (
                title
            ) : (
                <ThreeDots color="white" height={20} width={35} />
            )}
        </button>
    );
};

export default MagicButton;
