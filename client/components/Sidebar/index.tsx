import SidebarItem, { SidebarIcon } from "../SidebarItem";

const Sidebar = () => {
  return (
    <aside className="w-64 fixed h-full" aria-label="Sidebar">
      <div className="w-64 h-full shadow-md bg-white px-1 pt-24 z-0">
        <h2 className="text-lg font-bold mb-2 ml-4">Pages</h2>
        <ul className="space-y-2">
          <SidebarItem title="Sydney" url="#" icon={SidebarIcon.hashtag} />
          <SidebarItem
            title="Project Alpha"
            url="#"
            icon={SidebarIcon.hashtag}
          />
          <SidebarItem title="Marketing" url="#" icon={SidebarIcon.hashtag} />
          <SidebarItem
            title="Melbourne Trial"
            url="#"
            icon={SidebarIcon.hashtag}
          />
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
