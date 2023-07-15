import TableBody from "@src/components/Table/Body";
import TableFilters from "@src/components/Table/Filters";
import TableHead, { TableColumn } from "@src/components/Table/Head";
import { TableContext } from "@src/components/Table/TableContext";
import { ProjectResponse } from "@src/models/Project";
import { useState } from "react";

interface Props {
    data: any[];
    columns: TableColumn[];
    onSort?: Function;
}

type SortOrder = "asc" | "desc" | "";

const Table = (props: Props) => {
    const { data } = props;

    const [sortColumn, setSortColumn] = useState("");
    const [sortOrder, setSortOrder] = useState<SortOrder>("");

    return (
        <TableContext.Provider value={{ data }}>
            <div>
                <TableFilters onSelect={null} />
                <table className="w-full table-auto overflow-hidden rounded-b-lg bg-white shadow-md">
                    <TableHead />
                    <TableBody />
                    <tfoot>
                        <tr>
                            <td
                                className="bg-gray-100 py-3 px-4 text-left text-gray-600"
                                colSpan={6}>
                                Total:{" "}
                                <span className="font-bold">{data.length}</span>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </TableContext.Provider>
    );
};

export default Table;
