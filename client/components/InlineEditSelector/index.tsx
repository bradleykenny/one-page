import { Combobox } from "@headlessui/react";

import { useState } from "react";

interface Props {
    items: any[];
    onSelect: any;
}

const InlineEditSelector = (props: Props) => {
    const { items, onSelect } = props;

    const [query, setQuery] = useState("");

    const filteredItems =
        query === ""
            ? items
            : items.filter((item) =>
                  item.name.toLowerCase().includes(query.toLowerCase())
              );

    console.log(items);

    return (
        <Combobox>
            <Combobox.Input
                onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Options className="bg-white overflow-scroll h-72 border border-rose-500">
                {filteredItems.map((item) => (
                    <Combobox.Option key={item.id} value={item}>
                        <div className="flex py-2 px-2 items-center border border-green-500">
                            <div
                                className="mr-2 inline-block h-4 w-4 rounded"
                                style={{ backgroundColor: item.colour }}
                            />
                            <p className="mb-0">{item.name}</p>
                        </div>
                    </Combobox.Option>
                ))}
            </Combobox.Options>
        </Combobox>
    );
};

export default InlineEditSelector;
