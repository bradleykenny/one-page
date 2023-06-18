import { cn } from "utils";

type InputSize = "sm" | "md" | "lg";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    type: "text" | "password";
    label?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputSize?: InputSize;
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
                className={inputStyle(props)}
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    );
};

const inputStyle = (props: Props) => {
    const { inputSize = "md" } = props;

    const sharedStyles =
        "block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500";

    const sizeStyles = {
        sm: "text-xs h-8 self-center",
        md: "",
        lg: "text-md h-12 self-center",
    };

    return cn(
        sharedStyles,
        sizeStyles[inputSize],
        props.className
    );
};

export default Input;
