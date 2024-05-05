import { faImage, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MouseEventHandler } from "react";

interface Props {
    value: string;
    onClick: MouseEventHandler<HTMLDivElement>;
    onDestroy: MouseEventHandler<SVGSVGElement>;
}

const ImageSelector = (props: Props) => {
    const { onClick, onDestroy, value } = props;

    return (
        <div>
            <label
                htmlFor="input"
                className="mb-1 block text-sm font-medium text-gray-700">
                Background Image
            </label>

            <div
                className="flex cursor-pointer flex-col items-center rounded-lg border border-gray-300 py-6 text-sm text-gray-500 shadow-sm"
                onClick={onClick}>
                {!value ? (
                    <>
                        <FontAwesomeIcon icon={faImage} className="mb-2 h-10" />
                        <p className="m-0 ml-2">Select image</p>{" "}
                    </>
                ) : (
                    <div className="flex w-full items-center self-start">
                        <img
                            src={value}
                            className="-my-4 ml-2 h-28 self-start rounded-md shadow-md"
                        />
                        <p className="ml-4">Click here to change image</p>
                        <FontAwesomeIcon
                            icon={faTrash}
                            className="ml-auto mr-8 h-4 hover:animate-bounce hover:text-red-500"
                            onClick={onDestroy}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageSelector;
