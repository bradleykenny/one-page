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

    const sharedStyles = "px-4 py-2.5 rounded-md";

    switch (variant) {
        case "solid":
            return `${sharedStyles} bg-orange-500 text-white hover:bg-orange-600 text-sm font-medium transition-all`;
        case "soft":
            return `${sharedStyles} border border-orange-100 bg-orange-100 text-center text-sm font-medium text-orange-600 transition-all hover:border-orange-200 hover:bg-orange-200`;
        case "ghost":
            return `${sharedStyles} border border-transparent bg-transparent text-center text-sm font-medium text-orange-600 shadow-none transition-all hover:bg-orange-100`;
        case "plain":
            return `${sharedStyles} border border-gray-300 bg-white text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100`;
        default:
            return `${sharedStyles} bg-orange-500 text-white hover:shadow hover:bg-orange-600 text-sm font-medium shadow-sm transition-all`;
    }
};

export default Button;
