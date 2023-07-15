import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@radix-ui/react-popover";

import Button from "@src/components/Button";
import Checkbox from "@src/components/Checkbox";

interface Item {
    value: string;
    label: string;
    selected: boolean;
}

interface Props {
    name: string;
    options: Item[];
    onSelect?: (option: string) => void;
}

const FilterButton = (props: Props) => {
    const { onSelect, options } = props;

    const selectedOptions = options.filter((item) => item.selected);
    
    const handleItemClick = (value: string) => {
        onSelect(value);
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="flex">
                    <div className="z-50">
                        <Button look="plain" size="sm" rounded>
                            <div className="flex items-center">
                                <p className="m-0 mr-1">{props.name}</p>
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className="text-gray-500"
                                />
                            </div>
                        </Button>
                    </div>
                    {selectedOptions?.map((item, idx) => (
                        <div
                            className="-ml-8 flex h-8 items-center rounded-full border border-gray-300 bg-gray-200 py-1 pr-3 pl-10"
                            style={{ zIndex: 10 - idx }}>
                            <p className="m-0 text-sm">{item.label}</p>
                        </div>
                    ))}
                </div>
            </PopoverTrigger>
            <PopoverContent
                sideOffset={5}
                className="min-w-[11rem] rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm"
                asChild>
                <ul className="text-sm text-gray-700">
                    {options?.map((item) => (
                        <li className="m-2 flex items-center rounded p-2 hover:bg-gray-100">
                            <Checkbox
                                checked={item.selected}
                                label={item.label}
                                onClick={() => handleItemClick(item.value)}
                            />
                        </li>
                    ))}
                </ul>
            </PopoverContent>
        </Popover>
    );
};

export default FilterButton;
