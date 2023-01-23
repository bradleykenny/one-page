import { MouseEvent } from "react";
import { ThreeDots } from "react-loader-spinner";

interface Props {
    onClick?: () => Promise<void>;
    title: string;
    isLoading?: boolean;
}

const MagicButton = (props: Props) => {
    const { onClick, title, isLoading } = props;

    const handleOnClick = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await onClick?.();
    };

    return (
        <button
            type="button"
            onClick={handleOnClick}
            className="transition-500 text-md flex rounded-lg border border-indigo-200 bg-gradient-to-br from-indigo-500 to-orange-500 bg-200% px-3 py-1 text-center font-medium text-white shadow transition-all ease-in-out hover:bg-right focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
            {!isLoading ? (
                title
            ) : (
                <ThreeDots color="white" height={24} width={35} />
            )}
        </button>
    );
};

export default MagicButton;
