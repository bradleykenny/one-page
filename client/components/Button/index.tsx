import { Slot } from "@radix-ui/react-slot";
import { cn, tv } from "utils";

import { forwardRef } from "react";

type ButtonLook = "solid" | "soft" | "ghost" | "plain";
type ButtonSize = "sm" | "md" | "lg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    color?: string;
    look?: ButtonLook;
    size?: ButtonSize;
    fullWidth?: boolean;
    rounded?: boolean;
}

const button = tv({
    base: "flex flex-wrap items-center content-center justify-center rounded-lg border border-transparent bg-primary-500 text-center font-medium text-white transition-all hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
    variants: {
        look: {
            solid: "border-transparent bg-primary-500 text-white hover:bg-primary-600",
            soft: "border-primary-100 bg-primary-100 text-primary-600 hover:border-primary-200 hover:bg-primary-200 focus:ring-primary-200",
            ghost: "border-transparent bg-transparent  text-primary-600 shadow-none hover:bg-primary-100 focus:ring-primary-200",
            plain: "border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-100",
            default: "",
        },
        size: {
            sm: "h-8 self-center px-2 text-xs",
            md: "h-10 self-center px-4 text-sm",
            lg: "text-md h-12 self-center px-6",
        },
        rounded: {
            true: "rounded-full",
        },
        fullWidth: {
            true: "w-full",
        },
    },
});

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
    const {
        asChild,
        className,
        children,
        size = "md",
        look = "default",
        fullWidth,
        rounded,
    } = props;

    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            className={cn(
                button({ look, size, rounded, fullWidth }),
                className
            )}
            ref={ref}
            type="button"
            {...props}>
            {children}
        </Comp>
    );
});

export default Button;
