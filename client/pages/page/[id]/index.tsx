import MarkdownCard from "@src/components/MarkdownCard";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import usePage from "@src/hooks/usePage";
import { useRouter } from "next/router";
import { mdSample1 } from "test/markdown-content";

const User = () => {
  const router = useRouter();
  const { id } = router.query;

  const { result } = usePage(id as string);
  console.log("r", result);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="pt-32 pb-12">
        <MarkdownCard markdown={result || mdSample1("Test")} />
      </div>
      <SidebarInfo />
    </div>
  );
};

export default User;
