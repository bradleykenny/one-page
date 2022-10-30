module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                cursive: ['"Gloria Hallelujah"'],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
