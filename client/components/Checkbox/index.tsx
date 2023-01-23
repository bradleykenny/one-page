import { MouseEvent } from "react";

interface Props {
    checked: boolean;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
}

const Checkbox = (props: Props) => {
    const { checked, onClick } = props;

    return (
        <div className="flex items-center space-x-2">
            <input
                type="checkbox"
                checked={checked}
                onClick={onClick}
                id="example1"
                className="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
            />
            <label
                htmlFor="example1"
                className="text-sm font-medium text-gray-700"
            >
                I Accept
            </label>
        </div>
    );
};

export default Checkbox;
