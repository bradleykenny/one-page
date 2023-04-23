import { cn } from "utils";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    type: "text" | "password";
    label?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: Props) => {
    const { label, onChange, value } = props;

    return (
        <div>
            {label && (
                <label
                    htmlFor="input"
                    className="mb-1 block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <input
                type="text"
                id="input"
                className={cn(
                    "block w-full rounded-lg border-gray-300 shadow-sm focus:border-secondary-400 focus:ring focus:ring-secondary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
                    props.className
                )}
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    );
};

export default Input;
