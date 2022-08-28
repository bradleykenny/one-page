import SidebarItem, { SidebarIcon } from "../SidebarItem";

const dummyData = [
  {
    name: "Sydney",
  },
  {
    name: "Project Alpha",
  },
  {
    name: "Melbourne Trial",
  },
  {
    name: "Marketing",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-64 fixed h-full" aria-label="Sidebar">
      <div className="w-64 h-full shadow-md bg-gray-100 px-1 pt-24 z-0">
        <h2 className="text-lg font-bold mb-2 ml-4">Pages</h2>
        <ul className="space-y-2">
          {dummyData.map((data) => (
            <SidebarItem title={data.name} url="#" icon={SidebarIcon.hashtag} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
