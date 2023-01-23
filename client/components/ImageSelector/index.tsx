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
                className="mb-1 block text-sm font-medium text-gray-700"
            >
                Background Image
            </label>

            <div
                className="flex cursor-pointer flex-col items-center rounded-lg border border-gray-300 py-6 text-sm font-medium text-gray-400 shadow-sm"
                onClick={onClick}
            >
                {!value ? (
                    <>
                        <FontAwesomeIcon icon={faImage} className="mb-2 h-10" />
                        <p className="m-0 ml-2">Select image</p>{" "}
                    </>
                ) : (
                    <div className="flex items-center self-start">
                        <img
                            src={value}
                            className="-my-4 ml-2 h-28 self-start rounded-md shadow-md"
                        />
                        <p className="ml-4 italic">
                            Click here to change image
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageSelector;
