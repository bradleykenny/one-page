import { cn } from "utils";

interface Props {
    children: JSX.Element | JSX.Element[];
    className?: string;
}

const Card = (props: Props) => {
    const { children, className } = props;

    return (
        <div
            className={cn(
                "w-full h-full duration-400 mx-auto overflow-hidden rounded-lg bg-white px-8 py-6 shadow transition ease-in-out hover:shadow-md",
                className
            )}>
            {children}
        </div>
    );
};

export default Card;
