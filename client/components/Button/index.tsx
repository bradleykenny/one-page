import { MouseEvent } from "react";
import { cn } from "utils";

type ButtonVariant = "solid" | "soft" | "ghost" | "plain";

interface Props {
    label: string;
    color?: string;
    variant?: ButtonVariant;
    fullWidth?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: Props) => {
    const { color, fullWidth, label, onClick, variant } = props;

    const fullWidthStyle = fullWidth ? " w-full" : "";

    return (
        <button
            className={getButtonStyle(variant, color) + fullWidthStyle}
            onClick={onClick}>
            {label}
        </button>
    );
};

const getButtonStyle = (variant: ButtonVariant, color?: string) => {
    const btnColor = color || "orange"; // TODO: need to implement: https://tailwindcss.com/docs/content-configuration#dynamic-class-names

    const sharedStyles =
        "px-4 py-2 rounded-lg font-medium transition-all text-center border text-sm focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500 focus:outline-none";

    switch (variant) {
        case "solid":
            return cn(
                sharedStyles,
                "border-transparent bg-secondary-500 text-white hover:bg-secondary-600"
            );
        case "soft":
            return cn(
                sharedStyles,
                "border-secondary-100 bg-secondary-100 text-secondary-600 hover:border-secondary-200 hover:bg-secondary-200"
            );
        case "ghost":
            return cn(
                sharedStyles,
                "border-transparent bg-transparent text-secondary-600 shadow-none hover:bg-secondary-100"
            );
        case "plain":
            return cn(
                sharedStyles,
                "border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-100"
            );
        default:
            return cn(
                sharedStyles,
                "border-transparent bg-secondary-500 text-white hover:bg-secondary-600"
            );
    }
};

export default Button;
