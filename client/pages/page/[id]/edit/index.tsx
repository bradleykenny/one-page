import MagicButton from "@src/components/MagicButton";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import usePage from "@src/hooks/usePage";
import { useRouter } from "next/router";

import { useState } from "react";
import { createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";

const EditPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { result } = usePage(id as string);
  const parsedText = result.replace("\\n", "\n");

  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: parsedText }], // TODO: fix this
    },
  ];

  const [editor] = useState(() => withReact(createEditor()));

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="pt-32 pb-12">
        <div className="shadow-md bg-white w-6/12 mx-auto rounded-lg px-8 py-6">
          <div className="mb-4">
            <MagicButton title="Save" />
          </div>
          <Slate editor={editor} value={initialValue}>
            <Editable />
          </Slate>
        </div>
      </div>
      <SidebarInfo />
    </div>
  );
};

export default EditPage;
