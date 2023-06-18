import twColors from "tailwindcss/colors";

const shouldTextBeDark = (bgColour: string) => {
    if (!bgColour || bgColour.length < 6) {
        return;
    }

    const colour =
        bgColour.charAt(0) === "#" ? bgColour.substring(1, 7) : bgColour;

    const r = parseInt(colour.substring(0, 2), 16); // hexToR
    const g = parseInt(colour.substring(2, 4), 16); // hexToG
    const b = parseInt(colour.substring(4, 6), 16); // hexToB

    return r * 0.299 + g * 0.587 + b * 0.114 > 186;
};

const getTailwindColors = () => {
    const filteredColours = ["inherit", "current", "transparent"];

    const twColorKeys = Object.keys(twColors).filter(
        (key) => !filteredColours.includes(key)
    );

    const values = {};
    twColorKeys.forEach((key) => {
        const color = twColors[key];
        if (typeof color !== "string") {
            values[key] = {
                200: color?.[200],
                500: color?.[500],
            };
        }
    });

    console.log(values);
    return values;
};

export { getTailwindColors, shouldTextBeDark };
