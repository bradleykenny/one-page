interface Props {
    label?: string;
    options: string[];
    disabled?: boolean;
}

const Select = (props: Props) => {
    const { disabled, label, options } = props;

    return (
        <div>
            {label && (
                <label
                    htmlFor="input"
                    className="mb-1 block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <select
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
                disabled={disabled}>
                {options.map((option) => (
                    <option>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;
