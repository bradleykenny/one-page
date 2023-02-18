import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getTailwindColors } from "utils/colour";

interface Props {
    label?: string;
}

const ColorSelector = (props: Props) => {
    const { label } = props;

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

            <div className="flex flex-row gap-2 overflow-scroll py-2 relative">
                {Object.keys(colors).map((c) => (
                    <div className="flex flex-col">
                        <div
                            className="mb-2 h-6 w-6 cursor-pointer rounded hover:ring hover:ring-gray-300"
                            style={{
                                backgroundColor: colors[c]?.[200],
                            }}
                        />
                        <div
                            className="h-6 w-6 cursor-pointer rounded hover:ring hover:ring-gray-300"
                            style={{
                                backgroundColor: colors[c]?.[500],
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorSelector;
