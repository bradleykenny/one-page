import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export {
    cn,
    tv,
};
