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
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    );
};

export default Input;
