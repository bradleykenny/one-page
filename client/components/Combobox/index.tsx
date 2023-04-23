import { faCheck, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Combobox, Transition } from "@headlessui/react";

import { Fragment, useState } from "react";

interface Item {
    value: string;
    label: string;
}

interface Props {
    value: Item;
    items: Item[];
    onChange: (value: Item) => void;
}

export default (props: Props) => {
    const { value, items, onChange } = props;

    const [query, setQuery] = useState("");

    const filteredItems =
        query === ""
            ? items
            : items.filter((item) =>
                  item.value
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""))
              );

    return (
        <Combobox value={value} onChange={onChange}>
            <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden rounded-lg border border-gray-300 bg-white py-2 px-3 text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                        className="w-full border-none p-0 text-gray-900 focus:ring-0"
                        displayValue={(item) => item.label}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-2 flex items-center pr-2">
                        <FontAwesomeIcon
                            icon={faSort}
                            className="text-gray-500"
                        />
                    </Combobox.Button>
                </div>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}>
                    <Combobox.Options className="absolute mt-2 max-h-60 w-full overflow-auto rounded-lg border border-gray-300 bg-white py-1 shadow-sm  focus:outline-none sm:text-sm">
                        {filteredItems.length === 0 && query !== "" ? (
                            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                Nothing found.
                            </div>
                        ) : (
                            filteredItems.map((item) => (
                                <Combobox.Option
                                    key={item.value}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active
                                                ? "bg-orange-500 text-white"
                                                : "text-gray-900"
                                        }`
                                    }
                                    value={item}>
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                    selected
                                                        ? "font-medium"
                                                        : "font-normal"
                                                }`}>
                                                {item.label}
                                            </span>
                                            {selected ? (
                                                <span
                                                    className={`absolute inset-y-0 left-0 flex items-center pl-4 ${
                                                        active
                                                            ? "text-white"
                                                            : "text-orange-500"
                                                    }`}>
                                                    <FontAwesomeIcon
                                                        icon={faCheck}
                                                    />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))
                        )}
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    );
};
