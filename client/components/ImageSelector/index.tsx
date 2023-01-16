import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler } from "react";

interface Props {
    onClick: MouseEventHandler<HTMLDivElement>;
    value: string;
}

const ImageSelector = (props: Props) => {
    const { onClick, value } = props;
    return (
        <div>
            <label
                htmlFor="input"
                className="mb-1 block text-sm font-medium text-gray-700">
                Background Image
            </label>

            <div
                className="flex flex-col items-center py-6 border shadow-sm text-sm border-gray-300 rounded-lg cursor-pointer"
                onClick={onClick}>
                {!value ? (
                    <>
                        <FontAwesomeIcon
                            icon={faImage}
                            className="h-10 mb-2 text-gray-400"
                        />
                        <p className="m-0 ml-2">Select image</p>{" "}
                    </>
                ) : (
                    <div className="flex self-start items-center">
                        <img
                            src={value}
                            className="h-28 self-start -my-6 rounded-l-md"
                        />
                        <p className="ml-4">Click here to change image</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageSelector;
