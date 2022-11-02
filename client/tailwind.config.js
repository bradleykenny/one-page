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
            backgroundImage: {
                "login-bg":
                    "url('https://static.vecteezy.com/system/resources/previews/002/868/201/large_2x/hand-drawn-webinar-set-doodle-background-free-vector.jpg')",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
