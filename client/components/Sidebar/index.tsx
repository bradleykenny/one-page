import SidebarItem, { SidebarIcon } from "../SidebarItem";

import dummyData from "../../test/sidebar";

const Sidebar = () => {
    return (
        <aside
            className="w-72 fixed overflow-y-scroll px-1 mx-8 pt-4 pb-10 z-0 bg-white shadow rounded-md"
            aria-label="Sidebar">
            <h2 className="text-lg font-bold mb-2 ml-4">Pages</h2>
            <ul className="space-y-2">
                {dummyData.map((data) => (
                    <SidebarItem
                        title={data.name}
                        url="#"
                        icon={SidebarIcon.hashtag}
                    />
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
