import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface TableColumn {
    label: string;
    accessor: string;
    sortable?: boolean;
}

interface Props {
    columns: TableColumn[];
}

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th className="bg-gray-50 py-3 px-4 text-left">
                    <p className="m-0 mr-2 inline text-gray-600">Name</p>
                    <FontAwesomeIcon
                        icon={faArrowDown}
                        className="inline text-gray-400"
                    />
                </th>
                <th className="bg-gray-50 py-3 px-4 text-left">
                    <p className="m-0 mr-2 inline text-gray-600">User</p>
                    <FontAwesomeIcon
                        icon={faArrowDown}
                        className="inline text-gray-400"
                    />
                </th>
                <th className="bg-gray-50 py-3 px-4 text-left">
                    <p className="m-0 mr-2 inline text-gray-600">Project</p>
                    <FontAwesomeIcon
                        icon={faArrowDown}
                        className="inline text-gray-400"
                    />
                </th>
                <th className="bg-gray-50 py-3 px-4 text-left">
                    <p className="m-0 mr-2 inline text-gray-600">
                        Last updated
                    </p>
                    <FontAwesomeIcon
                        icon={faArrowDown}
                        className="inline text-gray-400"
                    />
                </th>
                {/* <th className="bg-gray-50"></th>
                                    <th className="bg-gray-50"></th> */}
            </tr>
        </thead>
    );
};

export default TableHead;
