import { getTailwindColors } from "utils/colour";

const ColorSelector = () => {
    const colors = getTailwindColors();

    return (
        <div className="grid grid-flow-col grid-rows-2 gap-2">
            {Object.keys(colors).map((c) => (
                <div className="flex flex-col">
                    <div
                        className="mb-2 h-6 w-6 rounded hover:ring"
                        style={{
                            backgroundColor: colors[c]?.[200],
                        }}
                    />
                    <div
                        className="h-6 w-6 rounded hover:ring"
                        style={{
                            backgroundColor: colors[c]?.[500],
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default ColorSelector;
