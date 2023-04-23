const colors = require("tailwindcss/colors");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: colors.indigo,
                secondary: colors.orange,
            },
            fontFamily: {
                cursive: ['"Gloria Hallelujah"'],
            },
            backgroundSize: {
                "200%": "200% auto",
            },
            fontSize: {
                massive: "30rem",
            },
            height: {
                128: "36rem",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
    ],
};
