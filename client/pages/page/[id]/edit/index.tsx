import Editor from "@src/components/Editor";
import MagicButton from "@src/components/MagicButton";
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
      <div className="pt-32 pb-12">
        <div className="shadow-md bg-white w-6/12 mx-auto rounded-lg px-8 py-6">
          <div className="mb-4">
            <MagicButton title="Save" />
          </div>
          <Editor value={parsedText} />
        </div>
      </div>
      <SidebarInfo />
    </div>
  );
};

export default EditPage;
