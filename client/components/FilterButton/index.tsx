import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@radix-ui/react-popover";

import Button from "@src/components/Button";

interface Props {
    name: string;
}

const FilterButton = (props: Props) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button look="plain" size="sm" rounded>
                    <div className="flex items-center">
                        <p className="m-0 mr-1">{props.name}</p>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className="text-gray-500"
                        />
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="border-1 w-44 divide-y divide-gray-100 rounded-lg border-gray-300 bg-white text-gray-700 shadow-sm">
                <ul className="text-sm text-gray-700">
                    <li>
                        <a
                            href="#"
                            className="m-2 block rounded p-2 hover:bg-gray-100">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="m-2 block rounded p-2 hover:bg-gray-100">
                            Settings
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="m-2 block rounded p-2 hover:bg-gray-100">
                            Earnings
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="m-2 block rounded p-2 hover:bg-gray-100">
                            Sign out
                        </a>
                    </li>
                </ul>
            </PopoverContent>
        </Popover>
    );
};

export default FilterButton;
