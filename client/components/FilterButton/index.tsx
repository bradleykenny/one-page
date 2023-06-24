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
                <div className="flex">
                    <div className="z-10">
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
                    <div className="-ml-8 flex h-8 items-center rounded-full border border-gray-300 bg-gray-200 py-1 pr-3 pl-10">
                        <p className="m-0 text-sm">Filter</p>
                    </div>
                </div>
            </PopoverTrigger>
            <PopoverContent
                sideOffset={5}
                className="min-w-[11rem] rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm"
                asChild>
                <ul className="text-sm text-gray-700">
                    <li className="m-2 flex items-center rounded p-2 hover:bg-gray-100">
                        <input type="checkbox" />
                        <a href="#" className="ml-2">
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
