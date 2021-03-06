import MarkdownCard from "@src/components/MarkdownCard";
import NavBar from "@src/components/NavBar";
import useApi from "hooks/useApi";
import { useRouter } from "next/router";
import React from "react";

const User = () => {
	const router = useRouter();
	const { user } = router.query;

	const userResult = useApi('/user')

	const hardcodedMarkdownWithQueryName = `# Hello, ${user}\nThis is your customised page.`;

	return (
		<div>
			<NavBar />
			<div className="pt-32">
				<MarkdownCard markdown={hardcodedMarkdownWithQueryName} />
			</div>
		</div>
	);
};

export default User;
