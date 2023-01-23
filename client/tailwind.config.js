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
            backgroundImage: {
                "login-bg":
                    "url('https://static.vecteezy.com/system/resources/previews/002/868/201/large_2x/hand-drawn-webinar-set-doodle-background-free-vector.jpg')",
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
