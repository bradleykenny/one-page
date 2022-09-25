import Editor from "@src/components/Editor";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import usePage from "@src/hooks/usePage";
import { useRouter } from "next/router";

const EditPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { result } = usePage(id as string);
  const parsedText = result.replace("\\n", "\n");

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="pt-20 pb-12">
        <Editor value={parsedText} />
      </div>
      <SidebarInfo />
    </div>
  );
};

export default EditPage;
