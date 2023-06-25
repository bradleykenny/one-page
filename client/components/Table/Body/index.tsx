import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lightenDarkenColor, shouldTextBeDark } from "utils/colour";

import { useContext } from "react";

import { TableContext } from "../TableContext";

const TableBody = () => {
    const ctx = useContext(TableContext);
    const { data, projects } = ctx;
    
    return (
        <tbody>
            {data.map((page) => {
                const parentProject = projects?.find(
                    (project) => project.id === page.projectId
                );

                return (
                    <tr
                        className={
                            "m-4 border border-l-0 border-r-0 border-gray-200"
                        }>
                        <td className="py-3 px-4">
                            <a
                                href={`/pages/${page.id}`}
                                className="-ml-2 rounded-lg py-1 px-2 text-indigo-700 transition-all ease-in-out hover:underline">
                                {page.title}
                            </a>
                        </td>
                        <td>
                            <div className="inline-flex items-center rounded-lg py-1 px-2 hover:bg-gray-100">
                                <div className="mr-2 flex h-5 w-5 items-center justify-center overflow-hidden rounded-full bg-blue-500">
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        className="mt-1 h-4 w-4 text-blue-200"
                                    />
                                </div>
                                {page.userId}
                            </div>
                        </td>
                        <td>
                            <div className="flex items-center py-3 px-4">
                                {parentProject && (
                                    <a
                                        href={`/projects/${parentProject.id}`}
                                        className="inline-block rounded-md px-2 py-1 text-xs font-medium"
                                        style={{
                                            backgroundColor:
                                                parentProject.color,
                                            color: shouldTextBeDark(
                                                parentProject.color
                                            )
                                                ? lightenDarkenColor(
                                                      parentProject.color,
                                                      -100
                                                  )
                                                : "white",
                                        }}>
                                        {parentProject.name}
                                    </a>
                                )}
                            </div>
                        </td>
                        <td className="py-3 px-4">
                            {new Date(page.createdAt).toDateString()}
                        </td>
                    </tr>
                );
            })}
        </tbody>
    );
};

export default TableBody;
