import SidebarItem from "@src/components/SidebarItem";

import dummyData from "../../test/sidebar";

const Sidebar = () => {
    return (
        <aside
            className="w-72 fixed top-24 bottom-4 overflow-y-scroll mx-4 pb-2 z-0 bg-white shadow rounded-lg px-2 hover:shadow-md"
            aria-label="Sidebar"
        >
            <h2 className="text-lg font-bold mb-2 pl-2 sticky top-0 pb-2 pt-4 bg-white/50 mt-0 backdrop-blur">
                Pages
            </h2>
            <ul className="space-y-2">
                {dummyData.map((data) => (
                    <SidebarItem title={data.name} url="#" />
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
