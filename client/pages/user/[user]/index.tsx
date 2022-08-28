import MarkdownCard from "@src/components/MarkdownCard";
import Navbar from "@src/components/Navbar";
import Sidebar from "@src/components/Sidebar";
import useApi from "hooks/useApi";
import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  const { user } = router.query;

  const userResult = useApi("/user");

  const hardcodedMarkdownWithQueryName =
    `# Hello, ${user}\nThis is your customised page. \n`.repeat(100);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="pt-32">
        <MarkdownCard markdown={hardcodedMarkdownWithQueryName} />
      </div>
    </div>
  );
};

export default User;
