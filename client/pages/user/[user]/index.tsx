import MarkdownCard from "@src/components/MarkdownCard";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import useApi from "@src/hooks/useApi";
import { useRouter } from "next/router";
import { mdSample1 } from "test/markdown-content";

const User = () => {
  const router = useRouter();
  const { user } = router.query;

  const userResult = useApi("/user");

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="pt-32 pb-12">
        <MarkdownCard markdown={mdSample1(user)} />
      </div>
    </div>
  );
};

export default User;
