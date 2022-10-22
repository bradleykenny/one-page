const SidebarInfo = () => {
    return (
        <aside
            className="w-72 fixed top-0 bottom-0 right-0 overflow-y-scroll bg-gray-100 px-1 pt-24 pb-10 z-0"
            aria-label="Sidebar">
            <h2 className="text-lg font-bold mb-2 ml-4">Information</h2>
            <ul className="space-y-2 px-4">
                <li>Posted by ...</li>
            </ul>
        </aside>
    );
};

export default SidebarInfo;
