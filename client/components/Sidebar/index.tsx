import SidebarItem from "@src/components/SidebarItem";

import { sideBarItems } from "config/Sidebar";

const Sidebar = () => {
    return (
        <aside
            className="hidden md:block w-72 fixed top-24 bottom-4 overflow-y-scroll mx-4 pb-2 z-0 bg-white shadow rounded-lg px-2 pt-4 hover:shadow-md"
            aria-label="Sidebar">
            <ul className="space-y-2">
                {sideBarItems.map((item) => (
                    <SidebarItem
                        title={item.title}
                        url={item.link}
                        icon={item.icon}
                    />
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
