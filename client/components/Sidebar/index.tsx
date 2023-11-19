import { Unbounded } from "@next/font/google";
import { sideBarItems } from "config/Sidebar";
import Link from "next/link";
import { cn } from "utils";

import ProfileLink from "@src/components/Sidebar/ProfileLink";
import SidebarItem from "@src/components/SidebarItem";

const unbounded = Unbounded({ weight: "700", subsets: ["latin"] });

const Sidebar = () => {
    return (
        <aside
            className="z-0 hidden h-full w-full overflow-y-scroll border-r border-gray-300 bg-white px-2 pb-2 shadow-inner md:block"
            aria-label="Sidebar">
            <Link
                href="/home"
                className={cn(
                    "mx-4 mb-4 mt-2 mr-8 inline-block cursor-pointer border-b border-gray-200 py-4 text-xl font-black text-orange-400 decoration-solid hover:text-orange-500",
                    unbounded.className
                )}>
                one<span className="text-indigo-500">:</span>page
            </Link>
            <ul className="space-y-2">
                {sideBarItems.map((item) => (
                    <SidebarItem
                        title={item.title}
                        url={item.link}
                        icon={item.icon}
                    />
                ))}
            </ul>
            <ProfileLink />
        </aside>
    );
};

export default Sidebar;
