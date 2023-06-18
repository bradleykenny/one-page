import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

import Button from "@src/components/Button";

interface Props {
    name: string;
}

const FilterButton = (props: Props) => {
    const [showMenu, setShowMenu] = useState(false);

    const handlePress = () => {
        setShowMenu((state) => !state);
    };

    return (
        <div className="relative">
            <Button variant="plain" size="sm" rounded onClick={handlePress}>
                <div className="flex items-center">
                    <p className="m-0 mr-1">{props.name}</p>
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className="text-gray-500"
                    />
                </div>
            </Button>
            {showMenu && (
                <div className="absolute top-10 z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow">
                    <ul className="text-sm text-gray-700">
                        <li>
                            <a
                                href="#"
                                className="block m-2 rounded p-2 hover:bg-gray-100">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block m-2 rounded p-2 hover:bg-gray-100">
                                Settings
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block m-2 rounded p-2 hover:bg-gray-100">
                                Earnings
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block m-2 rounded p-2 hover:bg-gray-100">
                                Sign out
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FilterButton;
