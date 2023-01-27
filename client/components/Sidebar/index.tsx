import { sideBarItems } from "config/Sidebar";

import SidebarItem from "@src/components/SidebarItem";

const Sidebar = () => {
    return (
        <aside
            className="fixed top-24 bottom-4 z-0 mx-4 hidden w-72 overflow-y-scroll rounded-lg bg-white px-2 pb-2 pt-4 shadow hover:shadow-md md:block"
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
