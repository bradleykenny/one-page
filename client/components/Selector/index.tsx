import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useState } from "react";

interface IProps {
    items: string[];
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

    const handleItemClick = () => {
        onClose();
    };

    const filteredItems = searchTerm
        ? items.filter((item) => item.includes(searchTerm))
        : items;

    return (
        <div className="bg-white border border-gray-300 rounded-lg py-2 pt-0 pb-0 overflow-hidden shadow-md">
            <div className="border-b border-gray-300 flex bg-gray-100 items-center">
                <input
                    type="text"
                    className="mx-2 py-2 px-3 pr-8 my-2 border bg-white border-gray-300 rounded-md focus:outline-2 focus:outline-orange-500 flex-1"
                    placeholder="Search"
                    onChange={handleChange}
                />
                <div className="h-full items-center flex absolute right-2 cursor-pointer">
                    <FontAwesomeIcon
                        icon={faClose}
                        className="p-2 mr-2 text-gray-500 hover:text-gray-900"
                        onClick={onClose}
                    />
                </div>
            </div>
            <div className="max-h-56 overflow-scroll">
                {filteredItems.map((item) => (
                    <div
                        className="border-b py-3 px-4 hover:bg-gray-100 cursor-pointer flex items-center"
                        onClick={handleItemClick}>
                        <div className="w-4 h-4 inline-block rounded mr-2 bg-green-400" />
                        <p className="mb-0">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Selector;
