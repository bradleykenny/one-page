import { faClose } from "@fortawesome/free-solid-svg-icons";
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
        <div className="overflow-hidden rounded-lg border border-gray-300 bg-white py-2 pt-0 pb-0 shadow-md">
            <div className="flex items-center border-b border-gray-300 bg-gray-100 p-2">
                <Input
                    type="text"
                    placeholder="Search"
                    onChange={handleChange}
                />
                <div className="absolute right-2 flex cursor-pointer items-center">
                    <FontAwesomeIcon
                        icon={faClose}
                        className="mr-2 p-2 text-gray-500 hover:text-gray-900"
                        onClick={onClose}
                    />
                </div>
            </div>
            <div className="max-h-56 overflow-scroll">
                {filteredItems.map((item) => (
                    <div
                        className="flex cursor-pointer items-center border-b py-3 px-4 hover:bg-gray-100"
                        onClick={() => handleItemClick(item)}
                    >
                        <div className="mr-2 inline-block h-4 w-4 rounded bg-green-400" />
                        <p className="mb-0">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Selector;
