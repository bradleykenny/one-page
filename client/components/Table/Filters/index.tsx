import { useContext } from "react";

import Button from "@src/components/Button";
import FilterButton from "@src/components/FilterButton";
import Input from "@src/components/Input";

import { TableContext } from "../TableContext";

const TableFilters = () => {
    const ctx = useContext(TableContext);

    return (
        <div className="flex w-full gap-2 rounded-t-lg border-b bg-gradient-to-b from-gray-50 to-gray-100 py-2 px-4 shadow-md">
            <p className="m-0 mr-2 self-center text-sm font-semibold text-gray-600">
                Filters
            </p>
            <FilterButton name="User" values={["One", "Two"]} />
            <FilterButton name="Project" />
            <div className="ml-auto flex gap-2">
                <Input type="text" placeholder="Search..." inputSize="sm" />
                <Button look="plain" size="sm">
                    Search
                </Button>
            </div>
        </div>
    );
};

export default TableFilters;
