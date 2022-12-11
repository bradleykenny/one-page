const SidebarInfo = () => {
    return (
        <aside
            className="w-72 fixed top-24 bottom-4 right-4 overflow-y-scroll px-1 pb-10 z-0 bg-white shadow rounded-lg hover:shadow-md"
            aria-label="Sidebar">
            <h2 className="text-lg font-bold mb-2 ml-4 py-2">Information</h2>
            <ul className="space-y-2 px-4">
                <li>Posted by ...</li>
            </ul>
        </aside>
    );
};

export default SidebarInfo;
