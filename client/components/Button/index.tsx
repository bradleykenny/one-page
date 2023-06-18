import { cn } from "utils";

import { MouseEvent } from "react";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "solid" | "soft" | "ghost" | "plain";

interface Props {
    children: React.ReactNode;
    color?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    rounded?: boolean;
}

const Button = (props: Props) => {
    const { children, onClick } = props;

    return (
        <button className={buttonStyle(props)} onClick={onClick}>
            {children}
        </button>
    );
};

const buttonStyle = (props: Props) => {
    const { size = "md", variant = "default", fullWidth, rounded } = props;

    const sharedStyles =
        "font-medium transition-all text-center border focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:outline-none flex-wrap flex content-center";

    const sizeStyles = {
        sm: "px-2 text-xs h-8 self-center",
        md: "px-4 text-sm h-10 self-center",
        lg: "px-6 text-md h-12 self-center",
    };

    const variantStyles = {
        solid: "border-transparent bg-primary-500 text-white hover:bg-primary-600",
        soft: "border-primary-100 bg-primary-100 text-primary-600 hover:border-primary-200 hover:bg-primary-200",
        ghost: "border-transparent bg-transparent text-primary-600 shadow-none hover:bg-primary-100",
        plain: "border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-100",
        default:
            "border-transparent bg-primary-500 text-white hover:bg-primary-600",
    };

    const widthStyle = fullWidth ? "w-full" : "";
    const roundedStyle = rounded ? "rounded-full" : "rounded-lg";

    return cn(
        sharedStyles,
        variantStyles[variant],
        sizeStyles[size],
        widthStyle,
        roundedStyle
    );
};

export default Button;
