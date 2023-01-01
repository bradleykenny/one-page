import { PageResponse } from "models/Page";

interface IProps {
    page?: PageResponse;
}

const SidebarInfo = (props: IProps) => {
    const { page } = props;

    return (
        <aside
            className="hidden md:block w-72 fixed top-24 right-4 overflow-y-scroll px-1 pb-4 z-0 bg-white shadow rounded-lg hover:shadow-md"
            aria-label="Sidebar">
            <h2 className="text-lg font-bold mb-2 ml-4 py-2">Information</h2>
            <ul className="space-y-2 px-4">
                <li>
                    <h3>User</h3>
                    <p>{page?.userId}</p>
                </li>
                <li>
                    <h3>Project</h3>
                    <p className="rounded-lg bg-green-700 mt-1 px-2 py-1 inline-block text-sm text-white cursor-pointer">
                        {"Example".toUpperCase()}
                    </p>
                </li>
                <li>
                    <h3>Last Updated</h3>
                    <p>{new Date(page?.updatedAt).toDateString()}</p>
                </li>
                <li>
                    <h3>Created On</h3>
                    <p>{new Date(page?.createdAt).toDateString()}</p>
                </li>
            </ul>
        </aside>
    );
};

export default SidebarInfo;
