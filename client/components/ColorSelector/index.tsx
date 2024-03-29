import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "utils";
import { getTailwindColors } from "utils/colour";

interface Props {
    label?: string;
    onSelect?: (colour: string) => void;
    value?: string;
}

const ColorSelector = (props: Props) => {
    const { label, onSelect, value } = props;

    const colors = getTailwindColors();

    return (
        <div>
            {label && (
                <label
                    htmlFor="input"
                    className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            <div className="relative mt-1 flex flex-row flex-wrap gap-0 overflow-hidden rounded">
                {Object.keys(colors).map((c) => {
                    const is200Selected = value === colors[c]?.[200];
                    const is500Selected = value === colors[c]?.[500];

                    return (
                        <div className="flex grow flex-col">
                            <div
                                className={cn(
                                    "m-0.5 h-6 cursor-pointer rounded hover:ring-2 hover:ring-gray-500",
                                    is200Selected && "ring-2 ring-black"
                                )}
                                style={{
                                    backgroundColor: colors[c]?.[200],
                                }}
                                onClick={() => onSelect(colors[c]?.[200])}
                            />
                            <div
                                className={cn(
                                    "m-0.5 h-6 cursor-pointer rounded hover:ring-2 hover:ring-gray-500",
                                    is500Selected && "ring-2 ring-black"
                                )}
                                style={{
                                    backgroundColor: colors[c]?.[500],
                                }}
                                onClick={() => onSelect(colors[c]?.[500])}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ColorSelector;
