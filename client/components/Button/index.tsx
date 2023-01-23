type ButtonVariant = "solid" | "soft" | "ghost" | "plain";

interface Props {
    label: string;
    color?: string;
    variant?: ButtonVariant;
    fullWidth?: boolean;
}

const Button = (props: Props) => {
    const { color, fullWidth, label, variant } = props;

    const fullWidthStyle = fullWidth ? " w-full" : "";

    return (
        <button className={getButtonStyle(variant, color) + fullWidthStyle}>
            {label}
        </button>
    );
};

const getButtonStyle = (variant: ButtonVariant, color?: string) => {
    const btnColor = color || "orange"; // TODO: need to implement: https://tailwindcss.com/docs/content-configuration#dynamic-class-names

    const sharedStyles =
        "px-5 py-2.5 rounded-lg font-medium transition-all text-center border text-sm";

    switch (variant) {
        case "solid":
            return `${sharedStyles} border-transparent bg-orange-500 text-white hover:bg-orange-600`;
        case "soft":
            return `${sharedStyles} border-orange-100 bg-orange-100 text-orange-600 hover:border-orange-200 hover:bg-orange-200`;
        case "ghost":
            return `${sharedStyles} border-transparent bg-transparent text-orange-600 shadow-none hover:bg-orange-100`;
        case "plain":
            return `${sharedStyles} border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-100`;
        default:
            return `${sharedStyles} bg-orange-500 text-white hover:shadow hover:bg-orange-600 shadow-sm`;
    }
};

export default Button;
