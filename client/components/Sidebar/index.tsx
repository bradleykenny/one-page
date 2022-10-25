import SidebarItem, { SidebarIcon } from "../SidebarItem";

import dummyData from "../../test/sidebar";

const Sidebar = () => {
    return (
        <aside
            className="w-72 fixed top-28 bottom-6 overflow-y-scroll px-1 mx-10 pb-10 z-0 bg-white shadow rounded-lg"
            aria-label="Sidebar">
            <h2 className="text-lg font-bold mb-2 pl-4 sticky top-0 py-2 bg-white/75">
                Pages
            </h2>
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
