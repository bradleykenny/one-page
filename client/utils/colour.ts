import twColors from "tailwindcss/colors";

const getTailwindColors = () => {
    const filteredColours = [
        "inherit",
        "current",
        "transparent",
        "lightBlue",
        "warmGray",
        "trueGray",
        "coolGray",
        "blueGray",
        "zinc",
        "neutral",
        "stone",
    ];

    const twColorKeys = Object.keys(twColors).filter(
        (key) => !filteredColours.includes(key)
    );

    console.log(twColorKeys);

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

    return values;
};

const lightenDarkenColor = (col: string, amt: number) => {
    let usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    const num = parseInt(col, 16);

    let r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    let b = ((num >> 8) & 0x00ff) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    let g = (num & 0x0000ff) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};

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

export { getTailwindColors, lightenDarkenColor, shouldTextBeDark };
