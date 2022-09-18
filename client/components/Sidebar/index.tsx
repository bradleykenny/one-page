import SidebarItem, { SidebarIcon } from "../SidebarItem";

import dummyData from "../../test/sidebar";

const Sidebar = () => {
  return (
    <aside
      className="w-72 fixed top-0 bottom-0 overflow-y-scroll shadow-md bg-gray-100 px-1 pt-24 pb-10 z-0"
      aria-label="Sidebar">
      <h2 className="text-lg font-bold mb-2 ml-4">Pages</h2>
      <ul className="space-y-2">
        {dummyData.map((data) => (
          <SidebarItem title={data.name} url="#" icon={SidebarIcon.hashtag} />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
