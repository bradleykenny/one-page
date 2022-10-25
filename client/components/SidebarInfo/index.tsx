const SidebarInfo = () => {
    return (
        <aside
            className="w-72 fixed top-28 bottom-6 right-10 overflow-y-scroll px-1 pb-10 z-0 bg-white shadow rounded-lg"
            aria-label="Sidebar">
            <h2 className="text-lg font-bold mb-2 ml-4">Information</h2>
            <ul className="space-y-2 px-4">
                <li>Posted by ...</li>
            </ul>
        </aside>
    );
};

export default SidebarInfo;
