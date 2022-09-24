import MarkdownCard from "@src/components/MarkdownCard";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import usePage from "@src/hooks/usePage";
import { useRouter } from "next/router";
import { mdSample1 } from "test/markdown-content";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  const { result } = usePage(id as string);
  const parsedText = result.replace("\\n", "\n");

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="pt-32 pb-12">
        <MarkdownCard markdown={parsedText || mdSample1("Soph")} />
      </div>
      <SidebarInfo />
    </div>
  );
};

export default Page;
