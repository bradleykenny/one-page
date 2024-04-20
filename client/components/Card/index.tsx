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
                "duration-400 mx-auto h-full w-full overflow-hidden rounded-lg border border-gray-300 bg-white px-8 py-6 shadow transition ease-in-out hover:shadow-md",
                className
            )}>
            {children}
        </div>
    );
};

export default Card;
