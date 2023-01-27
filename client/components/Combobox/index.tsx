import {
    faChevronDown,
    faChevronUp,
    faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useState } from "react";
import Input from "@src/components/Input";

interface Item {
    label: string;
    value: string;
}

interface IProps {
    items: Item[];
    onClick?: Function;
    onSelect?: Function;
    onClose?: () => void;
}

const Selector = (props: IProps) => {
    const { items, onClose } = props;

    const [isExpanded, setIsExpanded] = useState(false);

    const [searchTerm, setSearchTerm] = useState(undefined);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.trim());
    };

    const handleItemClick = (item: Item) => {
        onClose();
    };

    const filteredItems = searchTerm
        ? items.filter(({ label }) => label.includes(searchTerm))
        : items;

    return (
        <>
            <div
                className="flex items-center"
                onBlur={() => {
                    setIsExpanded(false);
                }}
                onClick={() => {
                    setIsExpanded(true);
                }}>
                <input
                    type="text"
                    className="block w-full rounded-lg border-gray-300 pr-8 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                    onChange={handleChange}
                />
                <div className="-ml-6 flex flex-col">
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        className="h-3 w-3 text-gray-500 hover:text-gray-900"
                        onClick={onClose}
                    />
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className="h-3 w-3 text-gray-500 hover:text-gray-900"
                        onClick={onClose}
                    />
                </div>
            </div>
            {isExpanded && (
                <div className="absolute mt-14 overflow-hidden bg-white ring block rounded-lg border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500">
                    <ul>
                        {filteredItems.map((i) => (
                            <li className="p-2 hover:bg-gray-100 w-full">{i.label}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Selector;
