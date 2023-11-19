module.exports = {
    plugins: [
        require("@trivago/prettier-plugin-sort-imports"),
        require("prettier-plugin-tailwindcss"),
    ],
    importOrder: [
        "^@/components/(.*)$",
        "^@/config/(.*)$",
        "^@/hooks/(.*)$",
        "^@/model/(.*)$",
        "^@/pages/(.*)$",
        "^@/screens/(.*)$",
        "^[./]",
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    tabWidth: 4,
    tailwindConfig: "./tailwind.config.js",
};
